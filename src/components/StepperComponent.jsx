import React from "react";
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'

function StepperComponent() {
    const steps = [
      { title: "First", description: "Contact Info" },
      { title: "Second", description: "Date & Time" },
      { title: "Third", description: "Select Rooms" },
    ];
  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep}>
      {
      steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default StepperComponent;