import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input 
                type="text"
                name="name" 
                placeholder="Insira o nome do projeto" 
                text="Nome do Projeto" 
            />
            <Input 
                type="number"
                name="budget" 
                placeholder="Insira o orçamento total" 
                text="Orçamento do projeto" 
            />
            <Select
                name="category_id" 
                text="Selecione a categoria"
            />

            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
