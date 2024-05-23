import { Router } from "express";
import UserAgent from "user-agents";
import Prettify from "../utils/prettify.js";
import * as cheerio from "cheerio";

const prettify = new Prettify();
const router = Router();

router.get("/getTrain", async (req, res) => {
  const trainNo = req.headers.trainno;
  console.log("Train: ", trainNo);
  try {
    const response = await fetch(URL_Train);
    const data = await response.json();
    console.log(data);
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    res.send(e.message);
  }
});

router.get("/betweenStations", async (req, res) => {
  const from = req.headers.from;
  const to = req.headers.to;
  console.log("From: ", from);
  console.log("To", to);
  try {
    const userAgent = new UserAgent();
    const response = await fetch(URL_Trains, {
      method: "GET",
      headers: { "User-Agent": userAgent.toString() },
    });
    const data = await response.json();
    console.log(data);
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/getTrainOn", async (req, res) => {
  const arr = [];
  const from = req.headers.from;
  const to = req.headers.to;
  const date = req.query.date;
  console.log("From: ",from);
  console.log("To: ",to);
  console.log("Date: ",date);
  try {
    const userAgent = new UserAgent();
    const response = await fetch(URL_Trains, {
      method: "GET",
      headers: { "User-Agent": userAgent.toString() },
    });
    const data = await response.json();
    console.log(date)
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/getRoute", async (req, res) => {
  const trainNo = req.query.trainNo;
  try {
    let response = await fetch(URL_Train);
    let data = await response.text();
    let json = prettify.CheckTrain(data);
    if (!json["success"]) {
      res.json(json);
      return;
    }
    response = await fetch(URL_Train);
    data = await response.text();
    json = prettify.GetRoute(data);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/stationLive", async (req, resp) => {
  const code = req.query.code;
  try {
    let response = await fetch(URL_Train);
    let data = await response.text();
    const $ = cheerio.load(data);
    let json = prettify.LiveStation($);
    resp.send(json);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/pnrstatus", async (req, resp) => {
  const pnr = req.header.pnr;
  try {
    //inspired from RobinKumar5986 (pull request #3)
    let response = await fetch(URL_Train);
    let data = await response.text();
    console.log(data);
    let json = prettify.PnrStatus(data);
    resp.send(json);
  } catch (error) {
    console.log(error);
  }
});

export default router;
