import {Button, Card, Checkbox, Col, Form, Input, Layout, Row,Modal} from "antd";
import logo from "../images/logo.png";
import React, {useState} from "react";

const {Header} = Layout;


const HomeHeader = ()=> {

    const [web, setWeb] = useState(false);
    const [ok, setOk] = useState(false);
    const [cancel, setCancel] = useState(false);

    const showModal = () => {
        setWeb(true);
    }
    const handleOk = () =>{
        setOk(true)
    }
    const handleCancel = () =>{
        setCancel(true)
    }
    return (
         <Header>
            <Row justify='space-between' align="middle">
                <Col>
                    <img className="logo" width={140} src={logo} alt='REPARAYA'/>
                </Col>
                <Col>
                    <Button>UNIRSE AHORA</Button>
                    <Button type="primary" onClick={showModal}>
                        INICIAR SESIÓN
                    </Button>
                    <Modal
                        title="BIENVENIDOS"
                        visible={web}
                        onOk={false}
                        onCancel={false}
                        footer={null}
                    >
                        <Form name="basic" initialValues={{remember: true}}>
                            <Form.Item name="email" rules={[{ type: 'email',required: true, message: 'Por favor, ingresa tu email.' }]}>
                                <Input placeholder="Email"/>
                            </Form.Item>

                            <Form.Item name="password" rules={[{required: true, message: 'Por favor, ingresa tu clave.'}]}>
                                <Input.Password placeholder="Contraseña"/>
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Recordarme</Checkbox>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                    INGRESAR
                            </Button>
                            <Button>
                                    CREAR CUENTA
                            </Button>
                        </Form>
                    </Modal>
                </Col>

            </Row>

        </Header>
    );
}
export default HomeHeader;
