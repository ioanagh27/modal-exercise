import React, { useState } from 'react';
import './index.css'

function Modal() {

    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (

    <>
        <button onClick={toggleModal} className="btn-modal">Open</button>
        {modal && (
        <div className='modal'>
            <div className='overlay'>
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem consequuntur minus culpa saepe dolorum obcaecati ipsum aut sed, aliquid in earum tempore laudantium vel iure quisquam reprehenderit commodi fugiat qui harum maiores quod voluptate ea eius! Quasi ea quos expedita blanditiis id temporibus nam! Mollitia hic obcaecati cupiditate ipsa!</p>
                    <button onClick={toggleModal} className="close-modal">Close X</button>
                </div>
            </div>
        </div>
        )}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem itaque accusamus possimus, dolores laborum error natus placeat. Dolorum illum a vel unde perspiciatis nobis, alias, culpa reiciendis dolore pariatur molestias quas adipisci. Tempora hic aspernatur necessitatibus odio placeat quis officia aliquam blanditiis ea suscipit vitae, expedita itaque nisi nesciunt accusamus dicta corrupti minus incidunt. Reprehenderit voluptates eius nulla blanditiis mollitia, dolores dolor iusto, asperiores non soluta, sapiente quia error inventore fuga nobis in facilis architecto. Eos aliquid vitae tempora, minima quidem nemo non totam nam a neque blanditiis est quasi nobis! Commodi vel incidunt, saepe ratione aliquam nobis obcaecati asperiores voluptate eveniet optio. Enim officia in commodi debitis officiis distinctio voluptatum. Dignissimos quisquam ex minima iure ducimus consectetur modi sed nulla nisi dicta, maiores corporis optio eos, veritatis ipsum aliquid obcaecati exercitationem quae eius. Perspiciatis commodi aliquid inventore quam illo, earum corrupti, corporis, reprehenderit esse recusandae quidem quas excepturi reiciendis soluta nostrum doloremque possimus! Expedita illum soluta obcaecati nobis officia. Explicabo repellat laboriosam, debitis nisi cupiditate corporis ipsum qui. Distinctio, blanditiis rerum reprehenderit laudantium, illum aliquam accusamus optio quas inventore laboriosam, deleniti ipsam autem voluptatibus corrupti quod porro vel? Fuga exercitationem, inventore amet illo error nesciunt dolore natus labore! Qui quae, sapiente, corrupti ratione excepturi corporis eveniet, incidunt commodi aliquam molestiae itaque? Necessitatibus eligendi esse quo suscipit eaque saepe eveniet corrupti quod iste dignissimos magni facere sed sequi, placeat sapiente illum, aperiam, in et repellendus distinctio minus aliquid quisquam enim? Harum et repellat debitis excepturi distinctio numquam. Autem, natus laudantium? Provident vitae commodi praesentium et sapiente quia. Quaerat aperiam officiis placeat incidunt et saepe, veniam eligendi autem necessitatibus explicabo provident ipsum magnam blanditiis ab quia velit quis, dolore nihil. Itaque ipsam aspernatur blanditiis iste neque, ducimus repellendus exercitationem culpa aliquam, tempore, veritatis fuga. Dolores reiciendis tenetur sit natus, aspernatur impedit alias dignissimos asperiores in ullam vero sapiente aliquid quo mollitia, animi velit suscipit soluta voluptate assumenda vel sed ratione. Omnis fugiat tenetur nobis quo, accusamus sapiente magnam ducimus exercitationem pariatur debitis quam labore praesentium quos veniam dolores voluptatibus. Delectus suscipit magnam ipsa, placeat culpa consequatur dignissimos neque vitae accusamus nobis cupiditate numquam minima quos! Earum repellendus magnam obcaecati, voluptatum accusantium pariatur error dolore consequatur qui ratione. Ea doloremque illo quidem officiis. Quisquam recusandae, neque nesciunt asperiores eligendi laudantium. Molestias perferendis quaerat accusantium nam eius repellat sint pariatur magni voluptatum hic? Magni amet, vero est temporibus eum dignissimos architecto illo distinctio. Commodi qui dolores labore vero eligendi non id amet soluta? Mollitia optio sapiente maiores praesentium eius ducimus. Ut quae molestias perspiciatis saepe iste dolores delectus, libero cumque incidunt, nihil sint vero in veritatis praesentium explicabo accusantium voluptates magnam dolorem, iusto recusandae eaque nostrum necessitatibus illo! Natus porro est repudiandae necessitatibus deserunt labore quo dicta totam tenetur quia nam eveniet magni consequuntur cumque architecto nobis, quisquam quis a illo possimus repellendus! Odio accusantium, ipsam illum odit sapiente commodi soluta rerum saepe quis esse, voluptatibus eum. Qui sed dolor asperiores ex maiores commodi voluptatum ipsum illum impedit tempore explicabo, quibusdam nisi dicta!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente asperiores repellendus doloribus sint delectus quasi amet recusandae itaque eveniet, officia, unde vero non officiis quo, quis modi! Magni vitae sequi velit incidunt quidem numquam nemo facere consequatur, ipsum dicta id repudiandae culpa qui laborum assumenda doloremque similique minus odio reiciendis deleniti. Cum totam odio sunt voluptatibus nulla repellat est, nihil, atque consequatur tenetur quam nobis unde minima eveniet sed qui, eum saepe necessitatibus! Molestiae quam magnam dolore exercitationem, ipsum harum aspernatur atque! Ullam inventore esse nisi odit recusandae hic repellendus quia ipsum perferendis, maxime natus repudiandae itaque incidunt atque officia?</p>
    </>
  )
}

export default Modal;