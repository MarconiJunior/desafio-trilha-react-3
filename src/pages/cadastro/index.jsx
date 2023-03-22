import {Column, Container, Row, Login, Termos, SubtitleLogin, Title, TitleLogin, Wrapper, LoginButtom } from './styles'
import Button from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useNavigate } from "react-router-dom";


import { useForm } from "react-hook-form";

const Cadastro = () => {

    const navigate = useNavigate();

    const {
      control,
      formState: { errors },
    } = useForm({
      reValidateMode: "onChange",
      mode: "onChange",
    });
  
    const handleClickSignIn = () => {
      navigate("/login");
    };
    console.log("errors", errors);

  return (
    <><>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, 
                dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input name='name' placeholder="Nome Completo" control={control}/>
                    <Input name='email' placeholder='E-mail' control={control} />
                    <Input name='password' type="password" placeholder='Senha' control={control}/>
                    <Button title="Criar minha conta" variant='secondary' type="submit" onClick={handleClickSignIn}/>
                </form>
                    <Termos>Ao clicar em "criar minha conta grátis", declaro que aceito as 
                        Políticas de Privacidade e os Termos de Uso da DIO.</Termos>
                <Row>
                    <Login>Já tenho conta. <LoginButtom href='./login'>Entrar</LoginButtom></Login>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    </></>
  )
}

export { Cadastro }