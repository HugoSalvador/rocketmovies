import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket notes</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>
                <h2> Crie sua conta </h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} 
                />

                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail} 
                />

                <Input 
                    placeholder="Nome"
                    type="password"
                    icon={FiLock} 
                />

                <Button title="Entrar"> Cadastrar </Button>

                <a href="/">
                    Voltar para o login
                </a>

            </Form>
            
        </Container>
    )
}

