"use client";
import React, { useState } from "react";
import "./registrationForm.css";
import CustomButton from "../CustomButton";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nome: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    nomeEmpresa: "",
    cnpj: "",
    diasFuncionamento: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Este campo é obrigatório";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const response = await fetch("../../utils/sendEmail.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso!");
      setFormData({
        nome: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        nomeEmpresa: "",
        cnpj: "",
        diasFuncionamento: "",
      });
      setErrors({});
    } else {
      alert("Erro ao enviar o formulário.");
    }
  };
  function goToHome(){
    window.location.href = "/";
  }
  return (
    <>
      <div className="under-construction-overlay">
        <p className="under-construction-text">
          Em construção. Entre em contato pelo e-mail{" "}
          <a href="mailto:ecoconnect7@gmail.com">ecoconnect7@gmail.com</a>.
        </p>
        <CustomButton className={"btn__faca-parte"} onClick={goToHome} >Home</CustomButton>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="registration-form__section-title">
          Informações Pessoais
        </h2>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Nome:
            <input
              className="registration-form__input"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && (
              <span className="registration-form__error">{errors.nome}</span>
            )}
          </label>
        </div>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Rua:
            <input
              className="registration-form__input"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
            />
            {errors.rua && (
              <span className="registration-form__error">{errors.rua}</span>
            )}
          </label>
        </div>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Bairro:
            <input
              className="registration-form__input"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            {errors.bairro && (
              <span className="registration-form__error">{errors.bairro}</span>
            )}
          </label>
        </div>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Cidade:
            <input
              className="registration-form__input"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            {errors.cidade && (
              <span className="registration-form__error">{errors.cidade}</span>
            )}
          </label>
        </div>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Estado:
            <input
              className="registration-form__input"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
            />
            {errors.estado && (
              <span className="registration-form__error">{errors.estado}</span>
            )}
          </label>
        </div>

        <h2 className="registration-form__section-title">
          Informações da Empresa
        </h2>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Nome da Empresa:
            <input
              className="registration-form__input"
              name="nomeEmpresa"
              value={formData.nomeEmpresa}
              onChange={handleChange}
            />
            {errors.nomeEmpresa && (
              <span className="registration-form__error">
                {errors.nomeEmpresa}
              </span>
            )}
          </label>
        </div>
        <div className="registration-form__group">
          <label className="registration-form__label">
            CNPJ:
            <input
              className="registration-form__input"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
            />
            {errors.cnpj && (
              <span className="registration-form__error">{errors.cnpj}</span>
            )}
          </label>
        </div>
        <div className="registration-form__group">
          <label className="registration-form__label">
            Dias de Funcionamento:
            <input
              className="registration-form__input"
              name="diasFuncionamento"
              value={formData.diasFuncionamento}
              onChange={handleChange}
            />
            {errors.diasFuncionamento && (
              <span className="registration-form__error">
                {errors.diasFuncionamento}
              </span>
            )}
          </label>
        </div>

        <button className="registration-form__submit" type="submit">
          Enviar
        </button>

        <p className="registration-form__privacy">
          <a
            className="registration-form__privacy-link"
            href="/politica-de-privacidade"
          >
            Política de Privacidade
          </a>
        </p>
      </form>
    </>
  );
}
