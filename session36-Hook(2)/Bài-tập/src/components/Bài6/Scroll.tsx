import React, { useState, useEffect } from "react";

export default function Clock() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, earum
        accusamus. Commodi adipisci itaque possimus asperiores illo architecto
        molestias eum cumque fugiat, porro dignissimos consequatur deleniti,
        quidem ut incidunt nobis? Id laboriosam eius dolore tempore iste esse
        beatae exercitationem voluptatibus! Quae tempore, debitis soluta quo
        laboriosam temporibus nam eum a consequatur perferendis maiores
        reiciendis suscipit! Repellendus itaque laudantium quae libero. Aliquam,
        similique laboriosam nesciunt consequatur corporis adipisci eligendi
        tempore ducimus quo saepe asperiores dolor, delectus expedita aperiam
        est, excepturi error qui. Dolorum natus, tenetur eum nesciunt et ducimus
        delectus facilis? Iusto nihil voluptatem sunt aliquam nostrum facilis id
        asperiores nam, nulla maiores. Ab officia sed odio molestiae est hic!
        Facere debitis non maiores molestias provident sapiente ipsam cum
        obcaecati consectetur! Laudantium fugiat dolore laborum sunt. Mollitia
        officia voluptatum beatae assumenda debitis consequatur provident
        labore, odio quo aspernatur consectetur, veniam ab distinctio similique
        ex iste? Blanditiis aliquid molestiae repellat inventore odit! Neque
        doloribus quidem voluptatem ad maiores ipsum, laudantium in reiciendis
        qui illo reprehenderit veritatis porro blanditiis error necessitatibus
        omnis perspiciatis. Soluta at quas neque molestias rem velit ducimus.
        Saepe, voluptatibus. Accusamus maiores, doloremque doloribus eos illum
        voluptatibus nesciunt iste ad possimus debitis earum libero, eum minus
        iure enim quaerat explicabo itaque, in amet tempore quod assumenda alias
        fuga dolorum? Numquam! Saepe ducimus obcaecati magni repellendus a!
        Corporis beatae doloremque harum tempore maxime adipisci illum iste illo
        iusto quod quasi a fuga, impedit voluptate optio nulla, eum animi!
        Deserunt, quibusdam officiis! Maiores saepe voluptate id molestiae
        distinctio esse explicabo odit itaque minus inventore quisquam eaque nam
        hic non sint nisi, soluta illo sunt beatae blanditiis laborum delectus?
        Non iure amet blanditiis! Fugit eveniet dignissimos delectus,
        consequatur nobis quibusdam quod laboriosam id! Totam maiores alias
        quibusdam harum, esse, sunt repellendus atque earum sed accusamus
        asperiores neque ut. Ad voluptatum veniam deserunt tempore! Molestias,
        natus soluta! Dolore laudantium nobis odio repudiandae iure eum!
        Facilis, quidem. Veniam placeat aliquam delectus, sapiente suscipit et
        exercitationem laboriosam, unde iure, architecto autem totam rem! Rerum,
        dicta earum. Quae sunt officia sit earum. Ipsum assumenda odio
        perferendis modi, provident est quidem sequi vero, hic explicabo natus
        quibusdam, doloremque deleniti possimus soluta qui quos nostrum?
        Corrupti nemo recusandae praesentium. Nihil, iusto. Totam possimus sed
        aut minima animi nesciunt tenetur? A molestiae architecto non eveniet
        fuga, nostrum nesciunt praesentium sint temporibus voluptates quaerat
        sit aliquam vel sunt nihil doloremque atque. Quaerat doloremque neque
        enim accusamus explicabo eius incidunt error animi maxime veritatis id
        nam minima, quae mollitia odio illo ad? Sunt sapiente aliquid quod
        necessitatibus aut inventore a exercitationem libero. Repellat amet
        mollitia odio quod consectetur voluptatem neque odit porro quis officiis
        totam voluptatum at eum necessitatibus, autem eaque! Rem aliquam
        blanditiis nihil quas deleniti impedit non saepe repellat ratione. Rem
        aliquam sit non! Voluptate, illo eum nulla quo mollitia delectus tenetur
        velit obcaecati omnis ratione, ut rerum laboriosam minima sed corporis
        deserunt rem. Tenetur dicta porro similique itaque perspiciatis. Hic
        praesentium consequatur quos voluptatibus unde. Quae est, incidunt sint
        consequatur exercitationem ipsum doloribus. Placeat accusamus nihil
        illum asperiores, repudiandae aut nostrum dolores veniam commodi,
        voluptate beatae iusto dignissimos nemo. Aliquid non ab amet culpa ipsa.
        Repellendus vitae nostrum inventore consequatur, laboriosam enim ut
        deleniti ducimus cum cumque quis hic quisquam aliquam veniam beatae iure
        accusamus ullam quidem possimus velit. Illo excepturi laudantium
        nostrum, ad atque dolorum iusto rerum voluptatibus, blanditiis dicta
        tempora. Velit sint mollitia perspiciatis ratione accusantium quidem
        nostrum blanditiis vero? Vitae ratione veritatis molestias unde aliquid
        iusto? Placeat eius eos cupiditate vel ratione voluptatibus dolores quae
        quod, ducimus hic exercitationem, ipsa, voluptatum voluptate! Temporibus
        accusamus itaque, illum earum tenetur tempora, veritatis aspernatur
        harum ea nihil, impedit explicabo! Vero non, molestiae veritatis fuga
        provident sequi architecto, quis cumque pariatur neque reiciendis unde
        tempore eveniet tenetur voluptatem eum natus fugit in? Accusantium
        doloribus reiciendis quis enim, odio id sunt. Nesciunt doloremque
        incidunt, in enim ipsum natus voluptatem officia minima modi error
        debitis velit consequatur vel autem officiis aliquid ad laudantium.
        Voluptatum quo dolor quia perferendis repellendus aperiam veritatis
        quisquam! Esse adipisci vitae modi dolores tenetur, quaerat sunt nobis
        necessitatibus excepturi numquam dignissimos ipsum enim aperiam
        doloribus? Optio quasi neque similique voluptatum aut sit aperiam vel
        recusandae quos? Nam, quidem. Debitis est magni beatae culpa porro ab
        hic voluptate quia rem earum, quibusdam sequi eius nemo labore error
        doloribus impedit ullam commodi voluptas, mollitia ea cupiditate
        sapiente saepe magnam! Nesciunt. Incidunt molestias recusandae repellat
        rerum consequuntur aliquid molestiae quos dignissimos eveniet atque.
        Illo et tempore architecto obcaecati doloremque explicabo expedita est
        laborum consequuntur, exercitationem ea, reiciendis earum culpa ullam
        ex? Amet quo magni nemo, nam ipsam beatae animi ducimus, voluptas veniam
        sint excepturi placeat blanditiis doloremque consectetur consequatur
        error nostrum a possimus cum praesentium facere obcaecati reiciendis!
        Nisi, nam asperiores. Ut alias neque quod cumque ab quo! Odit, alias
        possimus culpa animi a omnis, itaque nam sed aperiam illum dicta quae
        expedita delectus molestias dignissimos voluptas asperiores amet quasi
        perspiciatis. Dolore maxime veniam ratione aperiam quasi quas
        exercitationem deserunt facere voluptas corrupti explicabo, placeat
        eius, reiciendis maiores vero iusto odit non tempora sit libero culpa
        cupiditate in! Accusamus, ducimus. Et! Ab nulla optio perspiciatis vel
        numquam, quasi minima est praesentium sapiente beatae delectus illo
        temporibus ea doloremque incidunt ipsam sunt? Inventore consequatur iste
        perspiciatis tempore deserunt, quod est culpa excepturi. Ea deserunt
        blanditiis sequi corporis consequatur necessitatibus magnam repellendus
        pariatur neque voluptate voluptas ut assumenda dolor, autem molestiae
        dolorum repellat totam dolorem similique expedita ad aspernatur quas.
        Optio, repellat quidem. Quia dignissimos voluptates nulla vero tenetur
        obcaecati eveniet id alias eligendi iusto sed fugiat culpa molestiae,
        possimus repudiandae officia quo magnam? Repellendus aut modi a nam est,
        ab suscipit laborum! Quibusdam autem consequuntur voluptatibus iusto!
        Ipsam eaque hic maxime accusantium blanditiis atque officia animi dicta
        consequuntur at obcaecati sint, beatae tempora nisi consequatur iure
        quasi, quisquam tenetur ducimus alias? Consectetur. Dignissimos odit
        deleniti repudiandae aliquam quasi ducimus aperiam! Temporibus, nesciunt
        dignissimos deleniti atque quas nam, explicabo quidem natus quaerat
        totam libero labore expedita. Ab labore exercitationem eaque placeat
        autem quod? Ipsa voluptatem exercitationem nisi? Tempora illum
        voluptatibus molestiae a, similique obcaecati cum voluptas perspiciatis
        eius magni vitae nemo dolores sit sunt temporibus rem, error assumenda
        porro delectus. Deserunt, incidunt tempore. Deleniti molestiae libero
        nostrum repellat corporis sed mollitia quos animi obcaecati vitae
        debitis, et itaque hic voluptatem facere laudantium nihil impedit
        dolores ea illum nesciunt quas quibusdam autem. Adipisci, voluptas?
        Itaque, ab. Maiores ea nam aspernatur atque nobis obcaecati cumque
        molestias nulla similique fugit repudiandae cum dolor temporibus illum
        aperiam sed veritatis voluptatem, pariatur ipsum expedita libero. Quasi,
        impedit sit! Quia, similique aspernatur. Excepturi libero magnam
        officiis rem optio provident, dolore quae quam, laboriosam porro
        eligendi aliquid laudantium neque facere enim? Consequuntur vitae nobis,
        maxime laudantium omnis dolores optio. Minima. Earum nemo quaerat
        tenetur consectetur, ad asperiores vitae rerum veritatis dignissimos
        quasi molestiae quas voluptate provident? Distinctio doloremque atque
        pariatur, animi fugiat deleniti laboriosam possimus eos necessitatibus!
        Nihil, totam aliquid. Possimus neque saepe sunt ut eos? Quibusdam quas
        suscipit, et magnam corrupti nemo exercitationem dolorem magni odit esse
        corporis velit iure rerum dolore ipsam, voluptas consequuntur quidem
        laborum. Sequi, ea. Accusamus aspernatur ea eaque similique odit
        inventore nobis numquam saepe voluptate adipisci? Quidem laudantium cum
        praesentium, dolores blanditiis, aut aliquid tempore enim perspiciatis,
        laborum provident distinctio suscipit rerum animi? Cumque? Id, ut. Saepe
        natus, omnis necessitatibus ipsam laborum alias modi vitae
        exercitationem id aperiam, labore dolor assumenda possimus numquam! Aut
        ratione soluta eos nostrum reiciendis possimus perferendis assumenda,
        officia dolore! Officiis commodi explicabo ea velit sunt qui alias
        corrupti quidem eligendi impedit id molestiae expedita odit,
        perspiciatis, optio earum architecto nihil quis debitis rem ducimus
        quod, natus dolor omnis. Tempora? Consectetur, dicta! Similique quo
        magni dolor vero molestias quos unde! Quam, earum, quasi, ad vitae vero
        iste error aliquid modi iure magnam eveniet. Ipsa laborum quis fuga!
        Quos, consequuntur eum? Odit incidunt, ea nemo tempore sapiente fugiat
        tempora nam accusantium asperiores odio, voluptas mollitia eos et
        officiis! Facere, natus, veniam ullam, porro dolorum aperiam veritatis
        tenetur similique velit voluptatum soluta. Temporibus ex reiciendis ipsa
        voluptate doloremque, recusandae molestiae fugiat, officia quidem quae
        libero natus inventore dolore minima ipsum similique. Facere sunt omnis
        architecto deserunt sed eaque perspiciatis dignissimos sit in? Odit
        autem dolorem, consequatur esse sunt doloribus ullam ipsam, vel corrupti
        sint, odio laborum libero corporis? Sint eos ipsa placeat, consequuntur,
        ipsam labore facilis nihil reprehenderit, corrupti quisquam nesciunt in!
        Nam numquam et corrupti aliquam eaque eveniet praesentium maxime
        dolorem? Quas culpa iste tempore illum doloremque debitis, nisi odio
        veniam expedita. Deleniti in consectetur doloribus asperiores dolorem
        ipsam omnis cum? Quidem fugiat recusandae rem error. Quod, numquam, ut
        quaerat autem aliquam totam eius voluptates blanditiis ducimus, nemo vel
        consequuntur alias voluptatem voluptatum modi placeat exercitationem
        natus dolore quis commodi laborum? Recusandae cupiditate qui quod. Quis
        similique dolorem molestiae inventore labore ullam ad dolorum sit autem
        aut eligendi modi laudantium, quaerat assumenda consequatur tempore
        recusandae consequuntur, possimus praesentium, molestias quisquam
        quidem. Eveniet vitae expedita quos ullam provident pariatur cupiditate,
        aperiam voluptate unde praesentium maxime saepe optio facere sit id
        obcaecati autem magnam accusamus, eum aspernatur ratione, repudiandae
        hic! Eius, corrupti omnis!
      </p>
      <h2>Ví trị cuộn: {scroll}</h2>
    </div>
  );
}
