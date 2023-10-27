import React, { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import Container from '@mui/material/Container';
import Welcome from '../steps/Welcome';
import Step1 from '../steps/Step1';
import Step2 from '../steps/Step2';
import Step3 from '../steps/Step3';
import Step4 from '../steps/Step4';
import Step5 from '../steps/Step5';
import NavigationButtons from '../components/NavButtons';

const AssessmentForm = () => {
    const [step, setStep] = useState(1);

    const formik = useFormik({
        initialValues: {
            //Step1
            // the Basics
            // Delivery
            D1: false,

            // Business Outcomes
            B1: false,

            // Process Improvement
            P1: false,

            // Step2
            // Delivering working, tested software every 3 weeks or less
            // Iterations
            D1_1: false,
            D1_1_1: false,
            D1_1_2: false,
            D1_1_3: false,
            D1_1_4: false,

            // Step3
            // Delivering what the business needs most
            // Product Owner
            B1_1: false,
            B1_1_1: false,
            B1_1_2: false,
            B1_1_3: false,
            B1_1_4: false,
            B1_1_5: false,

            // Product Backlog
            B2_1: false,
            B2_1_1: false,
            B2_1_2: false,
            B2_1_3: false,

            // Step4
            // Continuously improving the process
            // Retrospectives
            P1_1: false,
            P1_1_1: false,
            P1_1_2: false,
            P1_1_3: false,

            // Definition of Done
            P1_2_1: false,
            P1_2_2: false,

            // Daily Stand-Up
            P1_3_1: false,
            P1_3_2: false,

            // Step5
            // Bonus Questions: things that can be helpful, but are not part of the basics necessities.
            // Postive Indicators
            H2_1: false,
            H2_2: false,
            H2_3: false,
            H2_4: false,
            H2_5: false,
            H3_1: false,
            H3_2: false,
            H3_3: false,
            H4_1: false,
            H4_2: false,
            H4_3: false,
            H4_4: false,
            H_1_1: false,
            H_1_2: false,
            H_1_3: false,
            H_1_4: false,
            H_1_5: false,
            H6_1: false,
            H6_2: false,
            H6_3: false,
            H7_1: false,
            H7_2: false,
            H7_3: false,
            H7_4: false,
            H8_1: false,
            H8_2: false,
            H8_3: false,
            H9_1: false,
            H9_2: false,
            H9_3: false,
            H9_4: false,
            H1_2_1: false,
            H1_2_2: false,
            H1_2_3: false,

        },
        onSubmit: (values) => {
            console.log('Form data', values);
            localStorage.setItem('formData', JSON.stringify(values));
        },
    });

    const handlePrev = () => {
        console.log('Step Previous', step);
        setStep(step - 1);
    };


    const handleNext = () => {
        console.log('Step Next', step);
        setStep(step + 1);
    };

    return (

        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <Container sx={{ pt: 2 }}>
                    {step === 1 && <Welcome onNext={handleNext} />}
                    {step === 2 && <Step1 />}
                    {step === 3 && <Step2 />}
                    {step === 4 && <Step3 />}
                    {step === 5 && <Step4 />}
                    {step === 6 && <Step5 onSubmit={formik.submitForm} />}
                </Container>
                {step !== 1 && step !== 6 && <NavigationButtons onPrevClick={handlePrev} onNextClick={handleNext} />}
            </form>
        </FormikProvider>
    );
};

export default AssessmentForm;
