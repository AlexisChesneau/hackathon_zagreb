import './Recommandation.css';

export default function Recommandation() {
  return (
    <div className="recommandation">
      <div className ="container">
        <img className="logo" src="./src/assets/icons/healthlogo.svg" alt="logo" />
        <h2>Nos Conseils Médicaux</h2>
        <div className='bloc-p'>
        <p><b>1er conseil :</b> Se mettre les doigts dans le nez</p>
        <p><b>2ème conseil :</b> Ne pas brouter les pissenlits</p>
        <p><b>3ème conseil :</b> Porter des lunettes de plongé</p>
        <p><b>4ème conseil :</b> Porter une cagoule</p>
        <p className="dernierConseil"><b>5ème conseil :</b> Se mettre un sac plastique autour de la tête</p>
        </div>
      </div>
    </div>
  );
}


