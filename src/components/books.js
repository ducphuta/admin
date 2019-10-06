import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';

export const BookList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="uid" />
            <TextField source="name" />
            <TextField source="categoryId" />
            <TextField source="description" />
            <TextField source="imgURL" />
            <TextField source="publisher" />
            <TextField source="author" />
            <TextField source="quantity" />
            <TextField source="sellPrice" />
            <TextField source="publishedAt" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const BookEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="uid" />
            <TextInput source="name" />
            <TextInput source="categoryId" />
            <TextInput source="description" />
            <TextInput source="imgURL" />
            <TextInput source="publisher" />
            <TextInput source="author" />
            <TextInput source="quantity" />
            <TextInput source="sellPrice" />
            <TextInput source="publishedAt" />
        </SimpleForm>
    </Edit>
);
export const BookCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="uid" />
            <TextInput source="name" />
            <TextInput source="categoryId" />
            <TextInput source="description" />
            <TextInput source="imgURL" />
            <TextInput source="publisher" />
            <TextInput source="author" />
            <TextInput source="quantity" />
            <TextInput source="sellPrice" />
            <TextInput source="publishedAt" />
        </SimpleForm>
    </Create>
);
