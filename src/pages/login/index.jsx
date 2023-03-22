import React from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {Column, Container, Row, CriarText, EsqueciText, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Button from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { api } from '../../services/api';


const schema = yup.object({
    email: yup.string().email('O email informado não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length && data[0].id) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
        }
    }
    
    return (<>
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça o seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder="Email"/>
                    <Input name='password' errorMessage={errors?.password?.message} control={control} type="password" placeholder='Senha' />
                    <Button title="Entrar" variant='secondary' type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText href='./Cadastro'>Criar Conta</CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>
        </>         
    </>
    )
}

export { Login }