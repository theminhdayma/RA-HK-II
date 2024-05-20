import React, { useEffect, useState } from "react";
import "./Index.css";

export default function Index() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //Trong useEffect, khi đăng ký bất kỳ sựu kiện nào client
    // bắ buộc chúng ta phải gỡ nó đi khi component

    // => Cleaup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleBackTop = () => {
    // Quay lại trang đầu
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backgound-full">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        provident aperiam deserunt in repudiandae, harum, accusamus vero ea est
        laudantium accusantium aliquid. Similique perferendis dolorem molestiae
        dolor quasi corporis amet. Cum quidem nam explicabo reprehenderit
        incidunt esse aliquam vero facilis enim, mollitia a aperiam, modi
        repellendus vitae quod ducimus tempora hic nisi voluptate provident
        natus debitis, sequi at eaque! Iusto. Vitae iure non doloribus velit
        ullam? Voluptatem dignissimos adipisci error voluptatum exercitationem
        facere quibusdam corrupti possimus. Alias, minus. Fugiat quibusdam
        tenetur eaque architecto earum non iure facilis rerum, et deserunt? Aut
        saepe natus facilis! Laudantium provident cupiditate iure distinctio ut
        enim, veniam ullam ratione quo eos, autem, quisquam qui quam fugiat quis
        est ex possimus magni saepe accusantium porro? Ratione? Doloremque
        quisquam quae eveniet ad harum aperiam eius sint totam laboriosam
        corporis beatae eligendi praesentium quam maiores dignissimos asperiores
        quia aspernatur voluptatibus, architecto officia labore voluptatem vero
        magnam iste. Reprehenderit? Non reiciendis ratione voluptatibus nemo
        doloremque? Tempore a hic perspiciatis, aperiam debitis numquam in
        doloribus odit maiores autem odio porro ullam consequatur rem harum quam
        dolore nobis veniam voluptatibus magni. Minima, architecto, in quod
        excepturi ducimus, consectetur officia accusamus distinctio quidem
        tempora laudantium labore non fugiat quos dolores esse a laborum?
        Voluptate culpa animi magnam repellendus, in labore laudantium rem? Sunt
        inventore ab eligendi dolore error ipsa animi deserunt! Animi voluptatum
        totam quaerat illum hic, culpa placeat illo officiis nemo tempore
        voluptas, commodi vero blanditiis officia sit provident veniam fugiat.
        Esse facere impedit fuga deleniti non repudiandae modi dolor qui ab
        itaque possimus quisquam et aliquid quae explicabo sequi vel, harum
        saepe nisi atque aperiam voluptate necessitatibus eos. At, perferendis.
        Est aspernatur voluptates iste ut vero et doloremque odit rem
        consectetur perferendis, provident quas sint, deserunt dolore unde
        dolores quos beatae corrupti molestiae accusamus repellat. Dolorem vitae
        vel tempora ullam. Iusto nihil quidem exercitationem nam illo deserunt
        enim, repudiandae saepe quisquam beatae vero sunt earum optio ad impedit
        vitae fugiat quia suscipit, nesciunt cumque voluptatem recusandae
        expedita voluptate perspiciatis! Officiis. Adipisci reprehenderit
        laudantium quo nostrum voluptatum commodi asperiores veritatis quasi,
        fugiat repellat repellendus a enim explicabo ipsa quia illo. Quaerat,
        doloremque repellat omnis ullam facere cupiditate voluptatem reiciendis
        saepe corrupti? Eum, atque fuga perferendis repellendus possimus minima
        blanditiis cumque non explicabo autem natus unde! Laudantium natus dicta
        veritatis aut maiores illum temporibus vitae rem cum soluta. Unde
        ratione maxime exercitationem! Quaerat, delectus impedit et sunt nobis
        aut nihil illum sequi quos ducimus quasi quis magnam error, perferendis
        voluptatibus! Omnis voluptas quo, vel esse fuga optio assumenda quia
        consectetur veniam unde! Itaque vero facere reprehenderit. Voluptas,
        exercitationem autem. Commodi modi error ipsam, quibusdam neque natus
        ipsum quis aut alias totam qui nesciunt aliquam non, harum blanditiis
        praesentium nam fugiat impedit corporis. Doloremque numquam alias
        architecto itaque quis magni provident accusantium! Eius ab cum modi
        exercitationem distinctio aliquam, veritatis voluptatem ullam iusto
        quae, veniam minus fugit, assumenda deserunt quidem tenetur? Voluptatum,
        ex. Consequuntur iste ut ratione odio ipsa eos molestias omnis et eum
        rerum vel est iure praesentium, esse necessitatibus asperiores dolore
        odit sed tempore voluptate labore voluptatibus? Expedita laboriosam
        rerum dolorem? Quasi nam delectus dolor veritatis maiores temporibus,
        dolores voluptate quam necessitatibus qui nemo iste eveniet suscipit
        explicabo itaque ducimus. Pariatur laboriosam, debitis doloremque
        quaerat vitae sapiente inventore? Incidunt, nobis iusto! Fugiat qui
        necessitatibus suscipit optio expedita itaque earum inventore odio
        accusamus ullam, laudantium eveniet voluptatum adipisci voluptates fugit
        amet quod commodi quisquam aliquam enim cupiditate? Aperiam numquam odit
        laborum cumque! Libero illum quidem asperiores natus nobis velit.
        Tenetur, excepturi itaque ipsam corrupti rerum dicta, repellat sint nemo
        deleniti hic provident dolorem id magni est accusamus laboriosam officia
        consequatur, nam sunt. Iure, dolores. Laudantium voluptatem nesciunt
        similique laboriosam, placeat corrupti odio vitae totam est cum eius ad
        quas exercitationem amet inventore, ex ullam deserunt eaque. Voluptate
        consectetur quam hic nisi illum. Voluptate cumque accusantium adipisci
        dicta voluptas voluptatem ratione veniam facere eius modi deleniti
        corrupti, hic exercitationem, sit, incidunt esse molestias voluptatum
        delectus pariatur et dolore dolorum. Ratione odio aspernatur saepe!
        Asperiores provident assumenda non repellat culpa autem accusantium,
        nemo quos magnam ullam sed nam inventore aspernatur dolor, blanditiis
        cum natus possimus rerum ex explicabo nesciunt. Eligendi odit minus iure
        optio? Consectetur ipsa exercitationem unde excepturi, magnam libero aut
        dolorum, eius ea eveniet dolore ratione! Inventore aspernatur nihil
        reiciendis, velit doloremque earum. Magni ullam quae quibusdam ad ipsa,
        dolore odit similique? Possimus reprehenderit architecto aliquam commodi
        a veritatis itaque quo mollitia sed. Fugit, aliquam ab deleniti
        excepturi quisquam eaque vero dolorum reiciendis earum, neque ipsa
        recusandae praesentium architecto voluptatum quibusdam repellat! Quidem
        ipsum ab earum distinctio officia nisi? Accusamus ducimus, magni culpa
        nulla officia sed quos officiis soluta et eius eligendi eaque possimus
        quo ipsa. Delectus incidunt voluptas quisquam enim reprehenderit.
        Voluptatibus illo beatae vero ullam, eligendi id aliquid quisquam iusto
        nemo sit esse explicabo perspiciatis deserunt dolor doloremque libero,
        autem adipisci! Voluptate dolores voluptatem porro voluptas error, animi
        ex inventore. Aspernatur tempora magnam, cum maxime similique quas
        nesciunt ducimus dolores fugiat minima vel accusantium ut alias, eum
        voluptatem impedit illum omnis eius, enim exercitationem nam nihil.
        Ipsum sapiente tempore vitae? Eligendi eos, error adipisci ea mollitia
        provident deleniti maiores excepturi ex obcaecati. Repellat explicabo
        soluta nemo illo exercitationem, repudiandae id molestiae dolorum
        consectetur fugiat! Distinctio ea corporis nulla ab maxime. Nihil
        aspernatur reprehenderit sit tenetur, minima facilis vel? Mollitia omnis
        qui sequi vitae culpa tenetur eligendi similique quaerat itaque
        distinctio. Saepe dolorum quae quia obcaecati quaerat labore nobis
        beatae et! Ea eos aperiam nobis temporibus repellat architecto
        voluptatem, enim magni ab laborum? Vero inventore excepturi quidem
        voluptatem amet nemo culpa perferendis! Voluptatem nulla, quibusdam enim
        tempora inventore eveniet fugiat a. Sit tempore, doloribus dolorum
        consequuntur amet rerum assumenda asperiores tempora exercitationem
        illum possimus odio eveniet iure necessitatibus fugiat neque laborum
        esse perspiciatis praesentium consequatur quam doloremque! Itaque
        praesentium adipisci distinctio? Deleniti quibusdam unde eaque labore
        repellendus a ex, necessitatibus non maiores eligendi ab et dolorum quam
        cupiditate nesciunt, expedita laboriosam. Doloremque temporibus delectus
        beatae nisi totam iusto asperiores, animi explicabo. Veniam
        reprehenderit, id quam ab velit earum quidem placeat ea? Sequi atque
        similique, minus hic asperiores beatae dolore laborum alias iusto
        voluptatum? In cum quam doloremque voluptatum sint nulla magnam. Rem aut
        expedita explicabo velit ab harum reiciendis iure assumenda ipsum soluta
        fugiat reprehenderit nisi esse temporibus cumque maiores, qui eius
        aliquid possimus. Voluptas incidunt iste laboriosam. Hic, quisquam
        laboriosam. Tempore laboriosam nihil iste possimus vero, enim, vitae
        sunt minus obcaecati recusandae fugiat repellat quisquam. Veniam
        aspernatur corporis harum! Voluptatibus nemo quae aut enim autem cum
        commodi et, provident quaerat. Veniam distinctio molestias quam maxime
        quis tempore ullam ducimus velit laboriosam, pariatur accusantium
        reiciendis dolores sapiente consectetur provident odio ratione, esse
        incidunt. Iusto, facilis quae. Magni soluta similique laborum corporis?
        Consequatur aperiam itaque pariatur? Asperiores, perferendis reiciendis
        minima est molestias recusandae nostrum pariatur velit minus unde nam
        vel natus similique assumenda dicta provident sunt reprehenderit saepe,
        ex molestiae illum cum! Beatae minus nobis ipsa ab, dignissimos quod
        dolores itaque totam soluta, explicabo a deserunt voluptatum sed dolore
        officiis, doloremque voluptas! Qui doloremque adipisci sit reiciendis,
        laboriosam magni nostrum et assumenda. Expedita, ipsam error quam hic,
        inventore quia doloribus dicta debitis aut ad ab ipsa eveniet animi
        voluptatem nostrum totam, suscipit in. Suscipit enim debitis obcaecati
        reiciendis alias nulla aperiam ipsum! Sint nesciunt quia omnis earum rem
        sed qui deserunt. Qui sequi, corporis dicta dolores, repellat molestiae,
        velit officiis molestias hic fugiat maxime. Saepe asperiores earum nam
        pariatur quibusdam, atque dolorem! Deleniti quam ratione, exercitationem
        velit dolore itaque porro voluptatibus laborum repellat enim iusto fuga
        ipsum minima maxime non amet nisi ut aut. Voluptas consequatur odit
        incidunt ducimus hic cum vero? Maiores, ipsum hic! Velit nulla, repellat
        rerum ipsa architecto delectus placeat dolores? Aliquid dolorem non
        illum veritatis repellendus eveniet expedita at officia totam? Deserunt
        maxime illum neque voluptatem. Recusandae, accusantium. Illo consectetur
        tenetur dolorem, iste veritatis laboriosam molestiae labore sint unde
        earum veniam consequatur excepturi! Voluptatum possimus omnis placeat
        consequuntur itaque in sapiente? Excepturi aspernatur quia, aut velit
        aliquid autem! Voluptate dolore reprehenderit impedit. Rem laudantium
        voluptatum, assumenda quibusdam possimus cupiditate maiores quasi! Animi
        eligendi, reiciendis asperiores corporis suscipit nesciunt nam pariatur
        voluptatem quibusdam necessitatibus! Deserunt consequuntur soluta illo
        laudantium. Mollitia, illo amet blanditiis cupiditate exercitationem aut
        architecto pariatur sint! Ipsum vero totam veritatis accusantium officia
        velit, excepturi quae recusandae necessitatibus tenetur dolor tempora
        sed nulla fuga, commodi illo perferendis. Accusantium necessitatibus
        labore distinctio amet, sapiente dolores hic aut fugiat nisi minus ullam
        iste aperiam, architecto quisquam tempora harum quidem. Nemo at quos
        aperiam fugiat doloribus animi, est aspernatur accusantium? Atque optio
        quisquam doloremque perspiciatis odio quos dicta est distinctio, hic
        possimus expedita harum voluptates culpa repellat facere esse veritatis
        obcaecati facilis, sequi debitis maiores officiis! Vero saepe ratione
        commodi? Voluptate, accusamus vitae? Qui non, exercitationem rem dolorem
        repellat expedita, illo harum blanditiis suscipit ipsum quibusdam iusto
        ipsa, dolor quas amet illum dolores sequi quae atque facilis nostrum
        nisi eveniet. Omnis doloribus harum porro sint labore, temporibus
        laudantium deleniti esse cupiditate similique, perferendis explicabo
        ipsum quia. Fuga iure esse aliquid animi, dignissimos dolores vitae
        deserunt ad laboriosam temporibus? Ad, nam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Eum vel dolorem quisquam voluptatum a
        eaque voluptate facere nobis et. Maxime vel, dolore odit dicta ducimus
        voluptates eius saepe ratione sit! Recusandae qui porro voluptatum
        ducimus autem quod blanditiis aperiam alias totam. At odit, veritatis
        quisquam voluptatibus libero vero architecto, quas reiciendis officiis
        dignissimos voluptates facilis voluptatem odio explicabo, nesciunt
        perspiciatis. Eveniet perspiciatis iusto iure? Praesentium atque id iste
        tempora, quis harum voluptates officiis molestias ipsum sequi optio
        deserunt iusto sunt soluta? Fuga quod explicabo molestiae excepturi
        iusto rem nihil fugit? Voluptates provident vero corrupti possimus sed
        facere molestiae in cum. Repudiandae assumenda, odio facere neque quia
        quam incidunt reprehenderit aspernatur odit quis tempore quasi hic
        itaque! Praesentium architecto debitis quasi. Distinctio rem autem
        consequatur, commodi id quae neque, voluptates aliquid eius porro
        pariatur corrupti facilis debitis animi nam! Ullam officiis tempora
        veritatis maxime expedita, blanditiis excepturi nesciunt quae sunt
        adipisci. Explicabo esse ipsam et saepe reiciendis officia beatae
        recusandae distinctio, dolorem ullam eaque, dicta autem fuga voluptatem
        ex molestias quas vitae quasi doloremque! Consequatur quos, excepturi
        porro incidunt harum laborum? Cumque, voluptatem maiores neque ipsum
        accusamus fugit soluta eaque exercitationem, nobis quos culpa, dolorum
        esse iusto omnis asperiores est? Nisi illo minus minima quisquam iure ad
        numquam, quo cum quibusdam. Architecto deserunt veniam labore omnis
        fuga. Corrupti sit odit, nam dignissimos repudiandae error, soluta quas
        quasi ducimus deleniti itaque illum eius voluptatibus nesciunt placeat
        totam laboriosam earum id libero eos! Dolores, inventore, quasi
        repudiandae ullam qui reprehenderit fuga quibusdam quia expedita
        nesciunt voluptas dolore laudantium sint quis asperiores, iusto ipsam
        unde architecto corrupti similique consequatur. Nulla hic excepturi eum
        fugit? Sint voluptates alias ea voluptatem sapiente consequuntur id
        officia natus nihil consectetur. Non dolores neque quod, eveniet ullam
        nulla molestias voluptatem ipsa quaerat magni quisquam molestiae facere
        voluptas sequi dolorum! Adipisci tempora sit cupiditate ipsum minima
        dicta consequatur, modi aspernatur earum dolor, quae blanditiis
        recusandae enim expedita corrupti sint perferendis unde laudantium
        tenetur at dolorum fugiat. Ipsum eos commodi cumque? Natus tempora error
        quaerat tempore impedit qui in commodi ad, unde voluptatum, ducimus
        nulla fugit praesentium sint. Doloribus aspernatur placeat esse neque,
        sunt repellat assumenda nesciunt quos, sit ea quis. Minus, magnam,
        veritatis alias tempore eveniet vero placeat labore aut aliquid repellat
        corrupti nobis? Illum quia mollitia rerum veritatis tenetur nulla at
        quisquam magni fugit aut voluptatibus eaque, animi voluptas? Repudiandae
        assumenda dicta nobis aspernatur? Velit debitis, eos ab itaque
        aspernatur qui eveniet quibusdam expedita tempora corrupti unde,
        officiis error atque illum saepe ducimus, beatae repellendus possimus
        incidunt. Praesentium, unde. Pariatur explicabo consequatur sequi eos
        mollitia ex aliquid labore dolores quia, nobis perspiciatis ullam
        blanditiis corrupti rerum vel accusantium id debitis voluptatum, dolorem
        sit quis alias sapiente. Corporis, incidunt! Adipisci? Quidem ducimus
        quisquam maiores saepe fugiat at? Aperiam nobis corrupti alias, beatae
        saepe tempora cumque, error libero porro unde possimus dicta dolor?
        Laborum rerum facere atque tempora minus, enim repudiandae.
        Exercitationem alias perferendis aliquam pariatur sit unde cum,
        asperiores repellendus magni, minus adipisci ullam dolorem inventore
        eaque assumenda molestiae esse ducimus labore, minima consequuntur
        voluptas harum. Repellat numquam nemo explicabo! Natus alias eos
        explicabo, vitae, praesentium labore animi impedit hic unde provident
        fuga dolore adipisci id libero cum inventore beatae molestias aspernatur
        ipsam doloremque dolor pariatur expedita distinctio. Illum, eveniet.
        Aliquam voluptatem dolores quam necessitatibus hic exercitationem
        consequatur vitae, magni eos illum sit minima maxime! Repudiandae, ullam
        aperiam? Quia quibusdam aut minima ullam, ipsum perspiciatis dolor
        corporis exercitationem laudantium non! Numquam animi quod voluptatibus,
        sit eaque deserunt! Reiciendis, maxime ad suscipit ex impedit odit natus
        odio saepe officiis eaque molestiae ratione amet consequatur sunt quam
        minus nostrum hic rem dolorem? Blanditiis nihil a at repellat earum
        mollitia asperiores, dignissimos architecto sint impedit dolorum,
        similique nemo laborum, itaque dolore? Maiores necessitatibus aliquam
        nesciunt natus expedita ad dicta cupiditate voluptas dolores quos!
        Dolorum molestiae architecto rem tempore eaque incidunt aperiam rerum,
        itaque ipsam molestias eum eius necessitatibus perferendis. Architecto
        exercitationem sit, unde porro, officiis inventore ducimus neque iste
        deserunt, quos eius minima! Quaerat distinctio natus, est fugiat tenetur
        adipisci labore recusandae illum, culpa perferendis similique animi iste
        quod officiis. Dicta corrupti, repudiandae odio nesciunt maxime esse
        cupiditate animi ut enim neque recusandae. Commodi officia inventore
        facere a sint consequatur dolore, libero sed suscipit animi excepturi
        non minus iusto sapiente laboriosam labore repellendus voluptates veniam
        accusantium ad rem harum accusamus. Quasi, suscipit eligendi? Dolorem
        veritatis perspiciatis corrupti itaque numquam velit, cupiditate quam
        quaerat saepe deleniti officia voluptates, blanditiis molestias magnam
        eius laborum mollitia cum modi nobis non veniam vero! Qui, consequatur?
        Exercitationem, quasi. Provident tempora quidem eius distinctio dolorum.
        Unde soluta voluptatum quae esse inventore porro similique, praesentium
        laboriosam eveniet repudiandae ut molestiae dignissimos nesciunt tenetur
        aliquid! Nemo iste odio sed voluptatem facere. Eos expedita non
        perferendis nostrum consequuntur, dolores accusamus minus voluptatibus
        quod est id quisquam in iure omnis veniam explicabo corporis harum sunt.
        Nulla exercitationem fugiat facere veniam ullam sint incidunt. Eveniet
        aliquam quod animi voluptate assumenda in quo, nobis sequi a velit,
        dolores porro ex ipsum ducimus facilis blanditiis voluptatibus
        asperiores. Quod fugit, nostrum facilis nobis aliquam iste quia
        obcaecati. Mollitia, perspiciatis culpa quas veritatis nobis impedit
        repellat fugit, doloribus exercitationem fugiat, quam iusto ex?
        Explicabo placeat voluptate tempora non odio autem veritatis dolor culpa
        dolorem cupiditate, nisi aliquid ipsa? Temporibus sapiente ipsam quae
        repellendus blanditiis rerum ipsa sint id? Suscipit ratione quas aperiam
        accusantium itaque officiis laborum eaque vitae! Minus porro ipsam non
        est necessitatibus similique. Laudantium, optio molestias. Iusto labore
        culpa maxime nemo quibusdam quam exercitationem? Sequi animi magnam,
        asperiores ea consequuntur explicabo cum tempora incidunt
        exercitationem? Nemo impedit quibusdam veniam ut in similique eos ea
        cumque ullam? Rerum earum obcaecati magni voluptates animi reiciendis
        itaque aperiam exercitationem ipsum, laborum nam placeat maiores
        consectetur maxime. Culpa quidem repellat, modi commodi voluptas, amet
        odio fugiat illum aperiam ex accusantium? Sapiente deleniti itaque ab
        possimus blanditiis aspernatur quis quibusdam molestiae iusto quasi
        facere vel, fuga dignissimos delectus impedit corporis, facilis suscipit
        hic debitis distinctio temporibus corrupti ratione, provident dolor?
        Voluptatibus! Cupiditate, atque ipsum. Sunt maiores, quidem voluptates
        itaque distinctio fuga ea illum nulla ut alias, ipsum animi perferendis
        cupiditate earum incidunt id similique perspiciatis, inventore quisquam
        laboriosam amet? Magni, laudantium. Quo, dolores blanditiis nulla ipsa,
        quasi, possimus numquam molestiae velit doloremque explicabo illo quam
        animi aperiam! Porro enim doloribus quisquam, odio facilis iusto in vero
        corrupti. Ducimus nesciunt delectus adipisci. Soluta repudiandae placeat
        rerum aliquam repellat voluptate consectetur veritatis, pariatur
        suscipit assumenda. Quisquam, consequatur doloremque delectus
        perferendis quo autem aspernatur voluptatibus labore sint quis dolorem
        corporis ratione reiciendis voluptatum earum! Dignissimos inventore
        provident ducimus qui quisquam nulla repellendus id optio ipsa sit!
        Pariatur commodi eum molestias, error eaque perspiciatis exercitationem
        obcaecati a tenetur modi repellendus, voluptas doloremque voluptates,
        inventore vero. Cupiditate facilis suscipit aperiam officia maxime quia?
        Amet, sapiente voluptas! Omnis aut earum blanditiis, recusandae illo
        consectetur voluptates eligendi dolore nemo incidunt voluptatem. Eius
        dicta reprehenderit consequatur adipisci quasi qui. Illo, nulla
        asperiores ipsa similique saepe optio cum corrupti quos quod nostrum
        labore placeat dolore praesentium a aut voluptates provident et unde
        temporibus numquam, amet voluptas? Sequi repellat natus a! Fugit,
        accusamus necessitatibus ea facere quos sed porro nobis a dolorem
        veritatis sunt perferendis corrupti, omnis suscipit alias nisi. Quidem
        ullam assumenda veniam, aperiam illum facere laboriosam fugit dolor
        perferendis! Officiis velit consequatur temporibus, facilis assumenda
        laboriosam dolorem. Veniam magni repellendus, similique illo ex
        consequatur itaque officiis recusandae ullam cum. Quaerat amet, nobis
        doloremque voluptatibus quia consectetur atque iure voluptatum! Pariatur
        sed omnis voluptates accusantium nemo! Aut aperiam praesentium sunt quae
        neque non eaque temporibus quibusdam hic iusto, magnam aliquam,
        necessitatibus eum iure nobis velit tempore! Dicta illo reiciendis
        facilis. Error minima, dolorem aliquam modi id, esse porro illum vitae
        voluptates quod exercitationem, laudantium officiis inventore
        doloremque! Non delectus vero aliquid, voluptatum nisi quos adipisci
        illo quia ipsam exercitationem error? Veritatis dicta expedita odio qui
        possimus architecto laborum quasi et eaque, rem porro alias ratione ea
        soluta amet officiis magnam totam ex ipsa! Dicta facere, asperiores
        temporibus quasi maxime nostrum! Similique rerum unde tempore sint
        facere iusto quia voluptatibus qui autem voluptas perferendis rem
        veritatis expedita, ipsum ratione omnis molestiae saepe fugiat quasi. A
        dolore optio cupiditate at ducimus in. Ducimus dolor maiores nam
        architecto cupiditate similique, numquam minima in labore dolorem
        eveniet amet inventore porro totam? Temporibus tenetur alias commodi cum
        qui in rem, sunt distinctio libero perspiciatis quo. Blanditiis laborum
        voluptas iste, maiores beatae, sed, officia enim atque odit nihil
        tenetur adipisci quibusdam nam? Dolor ipsa aspernatur odit. Optio
        facilis explicabo fugit sed, omnis sit provident mollitia placeat?
        Quidem omnis assumenda excepturi dicta officia repellat iusto aliquid
        soluta id sequi distinctio at fugit nisi ab non vitae aliquam quis
        beatae, consequuntur ratione natus accusantium. Perspiciatis quos quas
        labore? Vel explicabo enim optio? Ipsa aut sed dolorum vitae, temporibus
        perspiciatis aperiam neque aspernatur id. Corrupti voluptatem non,
        consectetur quae cupiditate dicta quibusdam neque reprehenderit unde
        ipsa, tempora, quidem quaerat. Similique porro maxime eveniet aperiam
        cumque repudiandae provident autem nulla quis rerum nostrum cum delectus
        deleniti, ullam optio quia perspiciatis architecto quos quibusdam iure
        suscipit exercitationem voluptatibus nemo at! Ratione?
      </p>
      {showButton && (
        <button className="btn-back-top" onClick={handleBackTop}>
          Back
        </button>
      )}
    </div>
  );
}
