import { Form, Input } from 'antd';
const { TextArea } = Input;
const AddMember = () => {
    return (
        <Form>
            <Form.Item
                label="Name"
                name="memberName"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your  product name!',
                    },
                ]}
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
                label="Desigation"
                name="memberDesignation"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your Designation!',
                    },
                ]}
            >
                <Input placeholder="Designation" />
            </Form.Item>
            <Form.Item name="profileSummary" label="Profile Summary">
                <TextArea placeholder="description" rows={4} />
            </Form.Item>
            <Form.Item
                label="LinkedIn URL"
                name="linkedin"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your URL!',
                    },
                ]}
            >
                <Input placeholder="https://" />
            </Form.Item>
        </Form>
    )
}

export default AddMember;