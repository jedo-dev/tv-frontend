import { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    console.log("Login Data:", values);

    setTimeout(() => {
      setLoading(false);
      onClose(); // Закрываем модалку после успешного ввода
    }, 1000);
  };

  return (
    <Modal title="Вход" open={open} onCancel={onClose} footer={null}>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Логин"
          name="username"
          rules={[{ required: true, message: "Введите логин" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
