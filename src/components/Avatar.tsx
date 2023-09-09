import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

// Quando o retorno de um componente é uma tag HTML, para permitir que os outros componentes que chamarem esse componente possam, 
// além de ter as propriedades criadas, receber os outros atributos que a tag pode ter, é necessário usar extensão dentro do TS
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean; // ? para indicar propriedade opcional
}

// jogando o rest operator dentro do objeto props
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props}
      // spread operator para pegar cada valor dentro do objeto props e passar como propriedade para a tag img
    />
  );
}