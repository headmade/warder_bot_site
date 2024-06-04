import Image from "next/image";
import styles from "./page.module.scss";
import { Row, Col, Button } from "antd";
import animation from '@/assets/Sequence 01 (1).gif'
import logo from '@/assets/headmade.svg'
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          <Row justify={"center"}>
            <Col xs={23} lg={20}>
              <div className={styles.head}>
              <p className={styles.icon}>Channel Warder <span className={styles.byhead}>by HeadMade</span></p>
              <a className={styles.phone} href="">+7 (843) 259-99-23</a>
              </div>

              <div className={styles.main_wrapper}>
                <p className={styles.title}>Антиспам-бот</p>
                <p className={styles.description}>Антиспам-бот для борьбы со спамом в Telegram-каналах</p>
                <a className={styles.link_bot} href="https://t.me/channel_warder_bot">@channel_warder_bot</a>
                <Button href="https://t.me/channel_warder_bot" className={styles.connect_btn}>Подключить</Button>
              </div>
            </Col>
          </Row>

        </div>

      </main>
      <div className={styles.forwho}>
        <Row justify={"center"} align={'middle'}>
          <Col xs={23} lg={20}>
            <Row justify={'center'} align={'middle'}>
              <Col xs={24} lg={14}>
                <p className={styles.forwho_header}>Кому?</p>
                <p className={styles.description_for}>Ваш телеграмм канал развивается и стал популярным. Поздравляем Вас!
                  Теперь настало время обезопасить свой канал от спама и непроверенной рекламы.</p>
                <p className={styles.forwho_subheader}>О нашем решении:</p>
                <p className={styles.description_for}>
                  Антиспам-бот осуществляет мониторинг комментариев в канале круглосуточно 24/7. Автоматически удаляет комментарий в случее обнаружения спама по ключевым словам. Вам доступна настройка семантического ядра.
                </p>
              </Col>
              <Col xs={24} lg={10}>
                <Image className={styles.animation} unoptimized src={animation} alt="gif" />
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
      <div className={styles.footer}>

<Image src={logo} alt="logo" className={styles.logo}/>
<p style={{marginBottom: 0}}>Разработано <a className={styles.link_hm} href="https://headmade.pro/">Headmade</a></p>
      <p>© 2024</p>
      </div>
    </div>
  );
}
