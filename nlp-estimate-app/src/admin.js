import ForgeUI, { Select, Form, Option, AdminPage, render, useState } from "@forge/ui";
import ComponentABC from "/components/...";

const availablePredictions = [
    {
        name: "random",
        active: true
    },
    {
        name: "mean",
        active: false
    },
];

export const exampleText = "Hello World.";

const submitPredictionMethod = async (predMethod) => {
    console.log(predMethod);
}

export const AdminConfigPage = () => {

    const [predictionNames, setActiveInIssues] = useState([...availablePredictions]);
    const preds = useState([...availablePredictions]);

    return (
        <AdminPage>
            <Form submitButtonText={"Test impl"} onSubmit={submitPredictionMethod}>
                <Select label="Select a prediction method" name="selectedPredictionMethod" isRequired={true}>
                    {projects.values.map(project =>
                        <Option label={project.name} value={project.key} />
                    )}
                    {preds.values.map(pred =>
                        <Option label={pred.name} value={pred.name} />
                    )}
                </Select>
            </Form>
        </AdminPage>
    );
};

export const run = render(
    <AdminConfigPage />
);
