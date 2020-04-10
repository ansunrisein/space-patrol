import React from "react";
import {Field, Form} from "react-final-form";
import {usePostArticle} from "../services/ArticleService";
import styles from "./ArticleCreation.module.scss"
import {content, placeholder} from "../resources/ru";
import {Button} from "../components/Button";
import {ImageUpload} from "../components/ImageUpload";
import {Redirect} from "react-router-dom";


const ArticleCreation = () => {
    const {value, pending, execute} = usePostArticle();

    if(value)
        return <Redirect to={`/article/${value._id}`}/>;

    const f = arg => execute({...arg, image: "dffdfdf"});

    return <Form onSubmit={f}>{({handleSubmit}) => <>
        <form onSubmit={handleSubmit}>
            <header className={styles.header}>
                <ImageUpload/>
                <Field name="title">{({input}) => (
                    <input placeholder={placeholder.title} className={styles.text} {...input}/>
                )}</Field>
                <Button type="submit" className={styles.button} disabled={pending}>{content.save}</Button>
            </header>
            <Field name="text">{({input}) => (
                <textarea placeholder={placeholder.text} className={styles.article_input} {...input}/>
            )}</Field>

        </form>
    </>
    }</Form>
};

export {ArticleCreation};