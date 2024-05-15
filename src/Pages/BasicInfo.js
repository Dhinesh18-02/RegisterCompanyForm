import { Form, Input, Select, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";
const { Option } = Select;

const BasicInfo = () => {
    const navigate = useNavigate
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
                <Option value="93">+93</Option>
            </Select>
        </Form.Item>
    );
    const prefixSelectorPostal = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
                <Option value="93">+93</Option>
            </Select>
        </Form.Item>
    );
    const handleClick = () => {
        navigate("/product");
    }
    return (
        <div>
            <h2>Basic Informations</h2>
            <Form>
                <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your company name!',
                        },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    label="Head Office Address"
                    name="headOfficeaddress"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your company address!',
                        },
                    ]}
                >
                    <Input placeholder="Street Number,House Number" />
                </Form.Item>
                <Form.Item
                    name="country"
                    label="Country"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select an option"

                        allowClear
                    >
                        <Option value="india">India</Option>
                        <Option value="america">America</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="city"
                    label="City"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your City!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelectorPostal}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="contact"
                    label="Contact Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Website URL"
                    name="website"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your company address!',
                        },
                    ]}
                >
                    <Input placeholder="Street Number,House Number" />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <button
                            style={{
                                border: 0,
                                background: 'none',
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
              </div>
                        </button>
                    </Upload>
                </Form.Item>
                
                </Form>
            <h2>Key Contact Person</h2>
            <Form>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your  name!',
                        },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    label="Desigation"
                    name="designation"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Designation!',
                        },
                    ]}
                >
                    <Input placeholder="Designation" />
                </Form.Item>
                <Form.Item
                    name="contact"
                    label="Contact Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Designation!',
                        },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
            </Form>
            
         <button onClick={handleClick}>Continue</button>
        </div>
    )
}

export default BasicInfo;

