import { Component } from "react";
import Title from '../styles/styled-components/Title'

export default function Loading({ isLoading }: {isLoading?: boolean} = { isLoading: false }) {
  return (
    <>
      {isLoading && <Title headNumber={4}>Carregando...</Title>}
    </>
  );
}