import Flowers from "../components/Flowers/Flowers"
import List from "../components/WishList/List"
import style from "./styles/Gift.module.css"

export default function Gift() {
  return (
    <div className={style.pageContainer}>
        <Flowers />
        <h3 className={style.title}>Lista de deseos</h3>
        <h4 className={style.subtitle}>“Si deseas regalarnos algo pero no sabes que”</h4>
        <List />
        <h3 className={style.msg}>¡LOS ESPERAMOS!</h3>
    </div>
  )
}
