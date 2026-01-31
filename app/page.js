'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
    personnes: '2',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        date: '',
        heure: '',
        personnes: '2',
        message: ''
      })
    }, 5000)
  }

  const menuItems = {
    entrees: [
      { nom: 'Soupe à l\'oignon gratinée', prix: '8€' },
      { nom: 'Escargots de Bourgogne (6 pcs)', prix: '12€' },
      { nom: 'Foie gras mi-cuit', prix: '16€' },
      { nom: 'Salade de chèvre chaud', prix: '10€' }
    ],
    plats: [
      { nom: 'Coq au vin', prix: '22€' },
      { nom: 'Bœuf bourguignon', prix: '24€' },
      { nom: 'Filet de saumon grillé', prix: '26€' },
      { nom: 'Magret de canard', prix: '28€' },
      { nom: 'Risotto aux cèpes', prix: '20€' }
    ],
    desserts: [
      { nom: 'Crème brûlée', prix: '8€' },
      { nom: 'Tarte tatin', prix: '9€' },
      { nom: 'Fondant au chocolat', prix: '9€' },
      { nom: 'Profiteroles', prix: '10€' }
    ]
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ margin: 0, fontSize: '2em', textAlign: 'center' }}>🍽️ Restaurant Le Gourmet</h1>
          <nav style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {['accueil', 'menu', 'reservation'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  background: activeSection === section ? '#667eea' : 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s',
                  textTransform: 'capitalize'
                }}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Section Accueil */}
        {activeSection === 'accueil' && (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.5s'
          }}>
            <h2 style={{ color: '#667eea', fontSize: '2.5em', marginTop: 0 }}>Bienvenue au Restaurant Le Gourmet</h2>
            <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
              <p>Découvrez une expérience culinaire exceptionnelle au cœur de la ville. Notre chef étoilé vous propose une cuisine française raffinée préparée avec des produits frais et de saison.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3em', marginBottom: '10px' }}>🕐</div>
                  <h3 style={{ color: '#667eea', marginBottom: '10px' }}>Horaires</h3>
                  <p style={{ margin: 0 }}>Mar - Sam: 12h - 14h & 19h - 22h</p>
                  <p style={{ margin: 0 }}>Dimanche: 12h - 15h</p>
                  <p style={{ margin: 0, color: '#999' }}>Fermé le lundi</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3em', marginBottom: '10px' }}>📍</div>
                  <h3 style={{ color: '#667eea', marginBottom: '10px' }}>Adresse</h3>
                  <p style={{ margin: 0 }}>123 Rue de la Gastronomie</p>
                  <p style={{ margin: 0 }}>75001 Paris, France</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3em', marginBottom: '10px' }}>📞</div>
                  <h3 style={{ color: '#667eea', marginBottom: '10px' }}>Contact</h3>
                  <p style={{ margin: 0 }}>+33 1 23 45 67 89</p>
                  <p style={{ margin: 0 }}>contact@legourmet.fr</p>
                </div>
              </div>

              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button
                  onClick={() => setActiveSection('reservation')}
                  style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Réserver une table
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Menu */}
        {activeSection === 'menu' && (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.5s'
          }}>
            <h2 style={{ color: '#667eea', fontSize: '2.5em', marginTop: 0, textAlign: 'center' }}>Notre Menu</h2>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#764ba2', fontSize: '2em', borderBottom: '3px solid #764ba2', paddingBottom: '10px' }}>🥗 Entrées</h3>
              {menuItems.entrees.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px',
                  borderBottom: '1px solid #eee',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '18px' }}>{item.nom}</span>
                  <span style={{ fontWeight: 'bold', color: '#667eea', fontSize: '18px' }}>{item.prix}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#764ba2', fontSize: '2em', borderBottom: '3px solid #764ba2', paddingBottom: '10px' }}>🍖 Plats Principaux</h3>
              {menuItems.plats.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px',
                  borderBottom: '1px solid #eee',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '18px' }}>{item.nom}</span>
                  <span style={{ fontWeight: 'bold', color: '#667eea', fontSize: '18px' }}>{item.prix}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#764ba2', fontSize: '2em', borderBottom: '3px solid #764ba2', paddingBottom: '10px' }}>🍰 Desserts</h3>
              {menuItems.desserts.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px',
                  borderBottom: '1px solid #eee',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '18px' }}>{item.nom}</span>
                  <span style={{ fontWeight: 'bold', color: '#667eea', fontSize: '18px' }}>{item.prix}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              marginTop: '30px'
            }}>
              <p style={{ fontSize: '16px', margin: '10px 0' }}>🍷 Menu Dégustation 3 plats: <strong>55€</strong></p>
              <p style={{ fontSize: '16px', margin: '10px 0' }}>🍾 Menu Prestige 4 plats avec accord mets-vins: <strong>85€</strong></p>
            </div>
          </div>
        )}

        {/* Section Réservation */}
        {activeSection === 'reservation' && (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.5s'
          }}>
            <h2 style={{ color: '#667eea', fontSize: '2.5em', marginTop: 0, textAlign: 'center' }}>Réserver une Table</h2>

            {submitted ? (
              <div style={{
                background: '#d4edda',
                border: '2px solid #28a745',
                borderRadius: '10px',
                padding: '30px',
                textAlign: 'center',
                fontSize: '18px',
                color: '#155724'
              }}>
                <div style={{ fontSize: '4em', marginBottom: '20px' }}>✅</div>
                <h3 style={{ color: '#28a745' }}>Réservation confirmée !</h3>
                <p>Merci <strong>{formData.nom}</strong> ! Votre réservation pour <strong>{formData.personnes} personne(s)</strong> le <strong>{formData.date}</strong> à <strong>{formData.heure}</strong> a été enregistrée.</p>
                <p>Un email de confirmation vous a été envoyé à <strong>{formData.email}</strong></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '2px solid #ddd',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                      Heure *
                    </label>
                    <select
                      name="heure"
                      value={formData.heure}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '2px solid #ddd',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="">Choisir...</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Nombre de personnes *
                  </label>
                  <select
                    name="personnes"
                    value={formData.personnes}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Message ou demande spéciale
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '2px solid #ddd',
                      fontSize: '16px',
                      boxSizing: 'border-box',
                      fontFamily: 'Arial, sans-serif'
                    }}
                    placeholder="Allergies, régime alimentaire, occasion spéciale..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Confirmer la réservation
                </button>
              </form>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '30px 20px',
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '10px 0' }}>© 2026 Restaurant Le Gourmet - Tous droits réservés</p>
        <p style={{ margin: '10px 0' }}>123 Rue de la Gastronomie, 75001 Paris | +33 1 23 45 67 89</p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
