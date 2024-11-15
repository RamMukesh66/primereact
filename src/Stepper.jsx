import React, { useState } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { InputSwitch } from "primereact/inputswitch";

export default function StepperComponent() {
    var [selectedStepId, setSelectedStepId] = useState(1);
    var [checked, setChecked] = useState(false);

    var steps = [
        { id: 1, label: 'Event details', content: 'Content I', completion: '0%' },
        { id: 2, label: 'Profile details', content: 'Content II', completion: '0%' },
        { id: 3, label: 'Companion details', content: 'Content III', completion: '0%' },
        { id: 4, label: 'Income & other details', content: 'Content IV', completion: '0%' }
    ];

    var handleStepChange = (e) => {
        var currentStep = steps[e.index];
        setSelectedStepId(currentStep.id);
    };

    var stepperActions = document.querySelectorAll('.p-stepper-action');
    stepperActions.forEach((action,i) => {
        action.classList.remove('completed-stepper');
        var numberElement = action.querySelector('.p-stepper-number');
        numberElement.innerHTML = i + 1
    })

    var updatedSteps = steps.map((step, index) => {
        var progressText = '0% Completed';
        var progressClass = 'stepper-disabled-progress';
        var titleClass = 'p-unselect-stepper-title';


        if (index < selectedStepId - 1) {
            progressText = '100% Completed';
            progressClass = 'stepper-completed-progress';
            titleClass = 'p-selected-stepper-title';

            var stepElement = document.getElementById(`pr_id_1_${index}_header_action`);
            if (stepElement) {
                stepElement.classList.add('completed-stepper');
                var numberElement = stepElement.querySelector('.p-stepper-number');
                numberElement.innerHTML = '<i class="pi pi-check"></i>';  
            }

        } else if (index === selectedStepId - 1) {
            progressClass = 'stepper-selected-progress';
            titleClass = 'p-selected-stepper-title';
        }

        return {
            ...step,
            progressText,
            progressClass,
            titleClass
        };
    });

    return (
        <div style={{ width: '100%'}}>
            <div style={{ display: 'inline-flex' }}>
                <Stepper onChangeStep={handleStepChange}>
                    {updatedSteps.map((step) => (
                        <StepperPanel
                            key={step.id}
                            header={
                                <>
                                    <span className={`${step.titleClass}`}>
                                        {step.label}
                                    </span>
                                    <p className={`stepper-progress-report ${step.progressClass}`}>
                                        {step.progressText}
                                    </p>
                                </>
                            }
                        >
                            <div>
                                {step.content}
                            </div>
                        </StepperPanel>
                    ))}
                </Stepper>
            </div>
            <hr />
            <TabView activeIndex={0}>
                <TabPanel header="Date">
                    <p className="m-0">
                        tab 1
                    </p>
                </TabPanel>
                <TabPanel header="Time">
                    <p className="m-0">
                        tab 2
                    </p>
                </TabPanel>
            </TabView>
            <hr />
            <Button label="Back" icon="pi pi-arrow-left" style={{fontSize:'14px',padding:'8px'}} />
            <hr />
            <Button iconPos="right" label="Next" severity="secondary" outlined icon="pi pi-arrow-right" style={{fontSize:'14px',padding:'8px'}} />
            <hr />
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}

