import styles from './Header.module.css'
import rocketLogo from './assets/rocket.svg';

export function Header(){
  return (
    <header>
      <img src={rocketLogo} alt="" />
    </header>
  )
}