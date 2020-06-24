import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Content,
  Form,
  StyledButtons,
  SecondaryButtons,
  StyledCarDetails,
  StyledCarDetail,
  StyledSelect,
} from './styles';
import { Context } from '../../context';
import FormInput from '../FormInput/index';
import { api } from '../../services/api';
import Button from '../Button/index';

const MainContent = ({ title, rest }) => {
  const { brands } = useContext(Context);
  const { id } = useParams();
  const [carId, setCarId] = id;
  const [carDetails, setCarDetails] = useState({
    id: '',
    title: '',
    model: '',
    brand: '',
    year: '',
    km: '',
    price: '',
    color: '',
  });

  useEffect(() => {
    const response = async () => {
      const { data } = await api.get(`cars/${carId}`);
      const { id, title, model, brand, year, km, price, color } = data;

      setCarDetails({
        id,
        title,
        model,
        brand,
        year,
        km,
        price,
        color,
      });
    };
    response();
  }, []);

  return (
    <Container {...rest}>
      <Content>
        <Form>
          <FormInput type="string" defaultValue={carDetails.title} />

          <StyledCarDetails>
            <FormInput type="string" defaultValue={carDetails.model} />
            <FormInput type="number" defaultValue={carDetails.year} />
          </StyledCarDetails>

          <StyledCarDetails>
            <FormInput type="string" defaultValue={carDetails.color} />
            <FormInput type="string" defaultValue={carDetails.price} />
          </StyledCarDetails>

          <StyledSelect>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </StyledSelect>

          <StyledCarDetail>
            <FormInput type="number" defaultValue={carDetails.km} />
          </StyledCarDetail>

          <StyledButtons>
            <SecondaryButtons>
              <Button>Remover</Button>
              <Button>Cancelar</Button>
            </SecondaryButtons>
            <Button>Salvar</Button>
          </StyledButtons>
        </Form>
      </Content>
    </Container>
  );
};

export default MainContent;
