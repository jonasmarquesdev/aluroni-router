import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return(
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        {/* voltando com react-router-dom*/}
        {/* o -1 faz voltar a página anterior inves de uma página fixa */}
        {/* <button onClick={() => navigate('/')}> 
          {'< Voltar'}
        </button> */}
        <button onClick={() => navigate(-1)}> 
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}