import React from 'react';
import {Filter, ReferenceInput, SelectInput, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';
// export PostIcon from '@material-ui/core/svg-icons/action/book';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="id" alwaysOn />
        <TextInput label="User" source="name" allowEmpty>
            <SelectInput optionText="name" />
        </TextInput>
    </Filter>
);
export const UserList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="email" />
            <TextField source="createdAt" />
            <TextField source="name" />
            <TextField source="id" />
            <EditButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title="Chỉnh sửa thông tin tài khoản" {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="createdAt" />
            <TextInput source="name" />
            <DisabledInput source="id" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Tạo một tài khoản mới" {...props}>
        <SimpleForm>
        <TextInput source="email" />
        <TextInput source="createdAt" />
        <TextInput source="name" />
        </SimpleForm>
    </Create>
);
