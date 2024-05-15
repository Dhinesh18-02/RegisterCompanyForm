import { Form,Input } from 'antd';
const { TextArea } = Input;
const AddNewProduct = () => {
    return (
        <Form>
            <Form.Item
                label="Product Name"
                name="productName"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your  product name!',
                    },
                ]}
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name="description" label="Product Description">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item
                label="Facebook/LinkedIn URL"
                name="socialmediaUrl"
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

export default AddNewProduct;