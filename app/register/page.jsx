"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useUserStore } from "@/store/User";
import ReCAPTCHA from 'react-google-recaptcha';

export default function Register() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [imgSource, setImgSource] = useState('https://www.roguemir4.com/payment/captcha.php?t=1695517981126');
  const [code, setCode] = useState('');
  const d = 97;
  const userStore = useUserStore();

  const siteKey = '6Ldq2l8oAAAAAGJ3fVj5Dc8gWeING9R_ykSioAqb';

  const handleRecaptchaChange = (value) => {
    // Você pode lidar com a resposta do reCAPTCHA aqui.
    console.log('reCAPTCHA value:', value);
  };

  const handleSelecaoChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        account,
        password,
        confirmPassword,
        question,
        answer,
        code,
        d,
      }
  
      const response = await axios.post('http://localhost:3334/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Lida com a resposta do servidor
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      // Lida com erros de requisição
      console.error('Erro na requisição:', error);
    }
  }

  return (
    <main className="relative w-full h-[150vh] bg-fixed bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <form className="absolute p-20 -translate-x-1/2 -translate-y-1/2 rounded drop-shadow-2xl top-1/2 left-1/2" onSubmit={handleSubmit}>
        <h1 className="mb-6 text-4xl font-bold text-white">Registre-se já!</h1>
        <div className="flex flex-col mb-4 gap-y-3">
          <label htmlFor="account" className="text-lg font-bold text-white">Login:</label>
          <input type="text" className="p-2 rounded" name="account" value={account} onChange={e => setAccount(e.target.value)} />
        </div>

        <div className="flex flex-col mb-4 gap-y-3">
          <label htmlFor="account" className="text-lg font-bold text-white">Senha:</label>
          <input type="password" className="p-2 rounded" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="flex flex-col mb-4 gap-y-3">
          <label htmlFor="account" className="text-lg font-bold text-white">Confirmação de senha:</label>
          <input type="password" className="p-2 rounded" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </div>

        <div className="flex flex-col mb-4 gap-y-3">
          <label htmlFor="account" className="text-lg font-bold text-white">Pergunta secreta:</label>
          <select className="p-2 rounded" onChange={handleSelecaoChange} name="question">
            <option>Selecione a pergunta</option>
            <option value="父亲姓名">Nome do pai</option>
            <option value="母亲姓名">Nome da Mãe</option>
            <option value="最爱的人名称">Nome da pessoa favorita</option>
            <option value="第一款网络游戏">Seu primeiro jogo online</option>
          </select>
        </div>

        <div className="flex flex-col mb-4 gap-y-3">
          <label htmlFor="account" className="text-lg font-bold text-white">Resposta secreta:</label>
          <input type="text" className="p-2 rounded" value={answer} onChange={e => setAnswer(e.target.value)} />
        </div>

        <div className="flex flex-col mb-4 gap-y-3">
          <label htmlFor="account" className="text-lg font-bold text-white">Código:</label>
          {/* <Image
            src={imgSource}
            alt="Code"
            width={200}
            height={200}
          />
          <input type="text" className="p-2 rounded" value={code} onChange={e => setCode(e.target.value)} /> */}
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={handleRecaptchaChange}
          />
        </div>
        <button className="p-2 text-white bg-red-600 rounded">
          Registrar
        </button>
      </form>
    </main>
  )
}