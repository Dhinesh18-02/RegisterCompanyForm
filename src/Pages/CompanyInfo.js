import { Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import AddMember from '../Components/AddMember';
const { TextArea } = Input;

const CompanyInfo = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/product')
    }
    const handleContinue = () => {
        navigate('/table')
    }
    return (
        <div>
            <h2>Tell Us More About Yourself</h2>
            <Form>
                <Form.Item
                    label="Breif Company Profile"
                    name="company Profile"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your  product name!',
                        },
                    ]}
                >
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
                <Form.Item name="vision" label="Vision/Mission">
                    <TextArea rows={4} />
                </Form.Item>
            </Form>
            <h2>Management Team Details</h2>
            <AddMember />
            <button>+Add Member</button>
            <button onClick={()=>handleBack()}>back</button>
            <button onClick={()=>handleContinue()}>Continue</button>
        </div>
    )
}

export default CompanyInfo;