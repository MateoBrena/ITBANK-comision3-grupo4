"use client"


import React from "react"
import Image from "next/image"
import Card from "react-bootstrap/Card"
import styles from "./page.module.css"
import HomeHeader from "./components/HomeHeader"
import Footer from "./components/Footer"

export default function Home() {
  return (
      <>
          <HomeHeader></HomeHeader>
          <section>
              <div className="banner">
                  <Image src="/../images/banner.png" alt="Foto de frente de sucursal" className="d-block w-100" width={1200} height={500}/>
              </div>
              <article className={styles.valores} >
                  <div className={styles.mision}>
                      <h4> Nuestra Misión</h4>
                      <p>Somos un Banco Universal, moderno y cercano que ofrece una variedad de servicios financieros de excelencia, permitiendo a nuestros clientes satisfacer sus necesidades de financiamiento, ahorro y pago. Creamos valor para nuestros accionistas, construyendo relaciones de confianza con quienes interactuamos y ofrecemos las condiciones para que las personas desarrollen su potencial, en un ambiente laboral desafiante y de respeto a nuestros valores.</p>
                  </div>
                  <div className={styles.vision}>
                      <h4> Nuestra visión</h4>
                      <p> Ser una compañía que resuelve todas las necesidades financieras de nuestros clientes, entregándoles la mejor experiencia personal y digital, sustentada en nuestra capacidad de conocerlos y personalizando el servicio que les entregamos. Queremos lograr convertirnos en el banco líder a partir de la permanente innovación en productos y servicios  financieros, el compromiso con nuestros clientes y el desarrollo y capacitación de nuestra gente.</p>
                  </div>
              </article>
              <h2 className={styles.tituloSection}>¿Por qué elegir Banco Río?</h2>
              <div className={styles.contenedorIndex}>
                  <Card className={styles.tarjetasIndex}>
                      <Card.Img variant="top" className="card-img-top" src="../images/modelo-tarjeta.jpg" alt="Persona sosteniendo tarjeta" />
                      <Card.Body className="card-body">
                          <Card.Title className="card-title">Nuestros productos</Card.Title>
                          <Card.Text className="card-text">Tenemos los mejores productos que se adaptan a tus necesidades. Tanto individuos como empresas podrán encontrar opciones al mejor precio del mercado.</Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className={styles.tarjetasIndex}>
                      <Card.Img variant="top" className="card-img-top" src="../images/modelo-celular.jpg" alt="Persona sosteniendo celular"/>
                      <Card.Body className="card-body">
                          <Card.Title className="card-title">Home Banking</Card.Title>
                          <Card.Text className="card-text">Nuestro home banking te permitirá estar conectado estés donde estés. Podrás realizar trámites, transferencias, chequear tus cuentas y mucho más desde la comodidad de tu hogar o incluso desde tu smartphone.</Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className={styles.tarjetasIndex}>
                      <Card.Img variant="top" className="card-img-top" src="../images/cajas-seguridad.png" alt="Cajas de seguridad" />
                      <Card.Body className="card-body">
                          <Card.Title className="card-title">Seguridad</Card.Title>
                          <Card.Text className="card-text">Tenemos un gran compromiso con la seguridad de todos nuestros clientes, tanto de manera presencial en nuestras sucursales como de manera virtual. Tu dinero y tus datos siempre estarán seguros.</Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className={styles.tarjetasIndex}>
                      <Card.Img variant="top" className="card-img-top" src="../images/modelo-soporte.jpg" alt="Persona con headset" />
                      <Card.Body className="card-body">
                          <Card.Title className="card-title">Atención al cliente</Card.Title>
                          <Card.Text className="card-text">Nuestro equipo está siempre preparado para resolver tus dudas o inconvenientes. Ya sea en una sucursal o de forma virtual, te garantizamos que serás atendido con la mejor predisposición y sin largas esperas.</Card.Text>
                      </Card.Body>
                  </Card>
              </div>
          </section>
          <Footer></Footer>
      </>
  )
}