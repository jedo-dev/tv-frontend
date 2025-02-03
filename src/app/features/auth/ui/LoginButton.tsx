import { useState } from "react";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import LoginModal from "./LoginModal";

const LoginButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        icon={<LoginOutlined />}
        onClick={() => setIsModalOpen(true)}
      >
        Войти
      </Button>
      <LoginModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default LoginButton;
