import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';
import theme from '../../styles/theme';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      emailjs.sendForm(
        'gmailMessage',
        'template_6np4c2i',
        event.target,
        'user_G0Vg9n3WLueatvRxreKcC'
      );
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (err) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        name="nome"
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        name="email"
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        name="mensagem"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        Enviar
      </button>
    </FormContainer>
  );
}
