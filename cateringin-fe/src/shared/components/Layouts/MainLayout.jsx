import {
  Home,
  LayoutDashboard,
  NotepadText,
  ScanBarcode,
  Settings,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className='bg-gray-50 h-screen'>
      <header className='fixed max-sm:top-0 md:ps-20 md:w-full h-20 w-full border-r shadow-sm bg-white'>
        <div className='grid grid-cols-[1fr_2fr_1fr] h-full'>
          <div className='flex items-center'>kiri</div>
          <div className='flex items-center justify-center'>tengah</div>
          <div className='flex items-center justify-end'>kanan</div>
        </div>
      </header>
      <aside className='fixed max-sm:bottom-0 h-16 w-full md:w-20 md:h-full border-r shadow-sm bg-white'>
        <div className='hidden md:flex md:h-[81px] md:items-center md:justify-center border-b'>
          <div className='text-lg font-bold'>Logo</div>
        </div>
        <div className='h-full flex md:flex-col max-sm:justify-around items-center md:space-y-10 md:items-center p-2 md:py-4'>
          <Link
            to={"#"}
            className='flex flex-col items-center hover:text-amber-500 p-2'
          >
            <Home className='h-6 w-6' />
            <span className='hidden md:block text-sm mt-1'>Home</span>
          </Link>
          <Link
            to={"#"}
            className='flex flex-col items-center hover:text-amber-500 p-2'
          >
            <LayoutDashboard className='h-6 w-6' />
            <span className='hidden md:block text-sm mt-1'>Board</span>
          </Link>
          <Link
            to={"#"}
            className='flex flex-col items-center hover:text-amber-500 p-2'
          >
            <NotepadText className='h-6 w-6' />
            <span className='hidden md:block text-sm mt-1'>Orders</span>
          </Link>
          <Link
            to={"#"}
            className='flex flex-col items-center hover:text-amber-500 p-2'
          >
            <ScanBarcode className='h-6 w-6' />
            <span className='hidden md:block text-sm mt-1'>Products</span>
          </Link>
          <Link
            to={"#"}
            className='flex flex-col items-center hover:text-amber-500 p-2'
          >
            <Settings className='h-6 w-6' />
            <span className='hidden md:block text-sm mt-1'>Settings</span>
          </Link>
        </div>
      </aside>
      <div className='pb-20 md:pb-4 pt-24 md:ms-20 p-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        molestiae dolorum quia aliquid saepe provident minus odio hic
        necessitatibus? Cum consequatur, obcaecati praesentium accusantium nisi
        aut quae. Incidunt quis, eius adipisci quod veritatis magni alias harum
        consequatur culpa vero, a quo, nesciunt non est inventore sequi eligendi
        doloremque autem magnam velit quibusdam tempore! Ex autem doloribus
        tempore accusamus quis, quibusdam maxime libero doloremque reiciendis
        quos vitae. Sequi corrupti labore inventore at nemo maxime asperiores
        enim? Impedit sit nostrum tempora incidunt! Temporibus sed enim ducimus!
        Quidem accusantium quaerat eum maiores qui ipsa ratione, expedita, quia,
        aut sapiente dolorum facere consectetur reiciendis obcaecati repudiandae
        error doloribus officia quis beatae delectus nesciunt atque asperiores!
        Quam omnis dolor facere ullam sed aperiam saepe totam, nemo ex dolorum
        vel esse fuga eligendi deleniti animi. Voluptas totam at fugit aliquam
        dolores eos. Tenetur, odio, eum nulla rerum laboriosam ipsam sit,
        reprehenderit quibusdam aperiam libero atque nesciunt dicta eveniet
        pariatur recusandae consequatur cupiditate provident corporis porro ipsa
        obcaecati? Libero nesciunt ex doloremque vel culpa aspernatur iste
        velit, eos consequatur labore reprehenderit beatae quaerat quam
        doloribus ut optio eum ad repellendus modi officiis dolore fugit
        perferendis! Culpa corporis nisi possimus obcaecati eum quaerat cumque
        mollitia aut blanditiis. Nisi minima veniam earum deleniti corrupti
        laboriosam consequatur, quaerat, quasi pariatur similique, at eveniet
        voluptas error eius corporis dolore rerum illum voluptate officia vel
        doloremque sit totam animi sequi. Quam, architecto atque vel possimus
        dolorum dolorem laborum suscipit mollitia, perferendis quo nemo, in iste
        error omnis hic itaque non dolor accusamus tenetur. Sint recusandae
        vitae ratione necessitatibus non minus incidunt voluptatum hic
        exercitationem vel voluptatem nulla ut corrupti deserunt suscipit libero
        consectetur veniam repellat totam nisi quo, error nesciunt! Perferendis
        officiis est voluptate in nobis, soluta commodi dignissimos, minus
        consequatur corporis perspiciatis nisi amet. Distinctio, quo delectus!
        Molestiae ex quo, id fugit omnis quaerat, iure tempore error corrupti
        nobis dignissimos nemo, corporis expedita porro quasi esse quisquam
        voluptas debitis modi magni? At, assumenda aperiam ipsum non ex,
        pariatur harum cum aspernatur nostrum nisi itaque quod? Porro obcaecati
        ut sint ipsa hic? Perspiciatis temporibus corrupti ea accusamus
        molestias nam, voluptate tempora. Maxime suscipit obcaecati et
        voluptates sunt quisquam. Earum quo explicabo labore, enim magnam fugit
        ut, quasi ex praesentium libero laudantium alias error id incidunt eos,
        debitis nemo facere commodi iure recusandae sit laboriosam at
        asperiores. Aliquid iusto deserunt adipisci officia corporis dolores eum
        repellat. Atque beatae eligendi, repellat sequi sapiente veritatis omnis
        a distinctio obcaecati esse vitae cum quia aspernatur laborum quaerat
        mollitia magni tempore tempora reprehenderit eveniet nemo quis
        laudantium natus fuga? Fugit voluptates minima minus ducimus, iusto nisi
        fuga quisquam velit accusantium, sed sequi modi veritatis ipsum optio
        temporibus ipsam molestias vitae, voluptatum quae perferendis ex magnam
        iure! A animi iusto, aspernatur dolores natus tenetur at sequi deleniti
        voluptates debitis reiciendis! Atque accusantium reprehenderit incidunt
        aut voluptatum saepe nemo temporibus non, ea quasi dolorem itaque amet
        consectetur commodi neque eveniet quod mollitia ab quaerat. Odio sequi
        nam consequuntur nisi rem debitis voluptates quo expedita reiciendis
        corrupti aliquam provident corporis pariatur voluptatem nesciunt
        repudiandae reprehenderit, maxime ab officia amet, dolore est soluta!
        Suscipit voluptatem molestiae sit recusandae autem rerum minus enim qui
        reiciendis reprehenderit alias, eos nemo officiis facilis magni! Debitis
        veritatis voluptatem unde. Omnis atque et, voluptatem quo hic
        consectetur? Doloremque officia vero quae labore incidunt voluptates.
        Inventore eaque tempore cum natus nulla dolor earum aliquam ad
        perferendis maiores soluta, expedita magnam? Laborum nam esse eius
        sapiente quo id autem, beatae laudantium eveniet incidunt eaque dolorem
        nihil quas, optio et deleniti in molestias vitae sunt consequuntur
        magnam soluta aliquam reprehenderit provident! Ut accusamus illum
        deserunt animi ad eos omnis explicabo, aperiam repudiandae eligendi.
        Molestias repellendus, aliquam quia maiores voluptatem officiis nemo
        ullam ad quae nostrum laboriosam esse tempore omnis totam natus
        voluptatum architecto repudiandae sit. Tenetur iure quod facere nemo
        est. Aliquam minima adipisci, eos dignissimos voluptas quos corrupti
        numquam perferendis ratione, laboriosam ipsum nobis sint? Minus
        asperiores soluta minima eligendi necessitatibus odit alias deserunt, a
        quas dignissimos perferendis, beatae voluptate culpa animi tempore
        numquam consectetur velit. Qui vel atque harum modi nesciunt
        repudiandae, pariatur sunt. Tempora aperiam, nulla minima saepe debitis
        consectetur, molestiae, error optio veniam nihil delectus! Vel sapiente
        fuga saepe mollitia voluptatem, aperiam quam suscipit fugiat et itaque
        aliquam quo dignissimos dolorem? Doloribus placeat dignissimos accusamus
        suscipit hic ratione eveniet neque odit! Repellendus vel debitis
        eligendi molestias reprehenderit sunt illo, totam doloremque quas
        mollitia fugit amet, aut atque quibusdam quasi itaque ratione! Molestiae
        natus at, similique nisi, amet deserunt, vitae reprehenderit commodi
        minima ratione laudantium tenetur totam quos nobis culpa et aliquam
        obcaecati eius earum expedita voluptas? Perferendis deserunt enim ab
        consectetur similique corrupti nulla rem dicta rerum eveniet minus
        dignissimos placeat harum, quidem, quasi nesciunt nam sunt dolor ipsum
        numquam illum cupiditate assumenda. Maiores blanditiis quae aliquam
        iusto reprehenderit error optio quo excepturi consectetur, aliquid
        voluptatum dolore libero ullam necessitatibus, officia autem architecto
        dignissimos rem? Iure quo dicta numquam est nisi eaque ipsam? Culpa
        tenetur voluptas deserunt non quisquam, ex adipisci corporis, quas
        dolores cum unde. Dolores, nostrum iusto harum minus asperiores odio
        eveniet cumque, autem alias, incidunt vitae! Rerum distinctio optio,
        impedit autem in explicabo consequuntur rem quisquam voluptas architecto
        quia veniam nesciunt! Similique soluta praesentium doloremque
        dignissimos quibusdam facilis ullam quae asperiores obcaecati. Quis
        dolores, illo numquam alias quasi repellendus rem natus atque eligendi
        necessitatibus deserunt earum quae maiores, saepe aut eveniet modi
        consectetur optio velit reprehenderit hic eos. Itaque aspernatur amet
        doloremque nulla laboriosam qui eaque, non impedit ad magni vero eveniet
        est et. Nobis natus quasi sed, exercitationem odit ea facilis
        reprehenderit fuga similique distinctio iste amet temporibus nulla? Quod
        aliquam aspernatur ut corporis, error illo est amet dolores quia
        tenetur? Laborum consequatur sed illum dolor, unde iure. At voluptatum
        maiores rem, vel odit modi sed illo nihil, ut ipsa magni. Vero nemo
        quasi similique, alias exercitationem aspernatur labore dolore, nobis
        iure porro distinctio, voluptate numquam. Error debitis autem
        voluptatibus recusandae doloremque molestias natus aliquam saepe iste
        impedit deserunt architecto deleniti, ratione, temporibus possimus
        laborum quis nostrum, nulla expedita quaerat? Blanditiis alias corrupti
        facilis quo sequi nesciunt molestiae odio, eaque adipisci, nisi
        exercitationem consectetur cumque minima consequatur id earum harum fuga
        tempora, voluptatum illo. Ipsa quam enim earum aliquam minima aliquid
        quasi impedit, error totam possimus. In nulla quo dicta fuga quae id,
        labore non delectus illum. Aliquid, natus veniam ullam sapiente culpa
        officiis saepe quo mollitia vitae, eius quos quisquam quasi unde aperiam
        esse voluptates consequuntur ratione? Optio voluptate dolorem quam
        ratione? Quia corrupti nobis cupiditate, delectus deleniti ipsum
        provident non esse eius est consectetur sequi architecto qui dicta,
        similique in laudantium reprehenderit eveniet nulla culpa doloribus.
        Incidunt quas iusto iure? Non esse quaerat omnis iure laborum,
        repellendus repellat dolores nisi modi voluptatum. Aperiam quo, natus
        sapiente libero asperiores officiis laudantium nesciunt incidunt modi
        dolores deserunt fugiat tempora dolor alias recusandae enim nobis non
        eaque dolorum? Id in hic dolore vel sequi! Delectus eos rem dicta sit ut
        voluptates rerum ipsa dignissimos. Accusamus facilis illum eligendi
        tempore voluptates error aliquam. Ipsum dolorum rerum numquam saepe ea
        quisquam aperiam nulla esse dolores, hic eveniet magni, odio sequi
        accusamus dicta doloremque sapiente, odit non temporibus facere rem
        porro illo pariatur! Voluptas fuga necessitatibus quisquam laudantium
        sed ratione eaque corrupti, possimus magnam impedit suscipit aliquam
        culpa facere, rem eligendi molestias voluptate rerum qui numquam
        reprehenderit obcaecati illum, dolore itaque. Earum maxime unde quasi
        labore aliquam voluptate ea, delectus error atque qui modi quaerat nihil
        rerum cumque dicta, ut et autem dolores. Veritatis sapiente fugit
        minima, velit expedita aut in quibusdam repellendus doloribus assumenda
        maxime sequi ad voluptate est reprehenderit ex deleniti! Beatae
        perspiciatis dignissimos quis ullam praesentium quas dolore porro illum
        doloremque quam totam, odio natus consequuntur animi incidunt nulla
        reiciendis, omnis eaque ab excepturi quaerat unde nemo cum? Iusto id
        soluta voluptate suscipit totam animi error quasi veritatis? Ullam,
        maxime odio. Sint, qui! Veniam eos delectus eligendi recusandae, placeat
        eveniet, dolore exercitationem ratione quam blanditiis non dicta
        voluptatem magni facere officiis eum repellendus dignissimos? Ea,
        accusamus? Praesentium, earum. Atque enim aliquid laboriosam! Amet sit
        in, earum tempora nemo dolores modi dolore voluptatem esse veniam totam
        magnam voluptate perferendis illum itaque quia. Alias quasi molestiae,
        eius optio explicabo, id fuga ipsum doloremque doloribus necessitatibus,
        cum natus? Culpa deleniti voluptatibus eius corrupti quas. Ea modi
        eligendi ab nulla, perferendis corrupti dolorem labore! Deleniti,
        temporibus reprehenderit quaerat, perferendis accusamus non eaque fuga
        aliquam magnam dolorum ratione sed harum libero, in veritatis magni
        quasi ex. Sit eaque libero pariatur dolor quisquam quasi, placeat quod
        deleniti in expedita mollitia modi unde itaque, vero nihil doloremque
        illum officia doloribus quis dignissimos. Incidunt harum repellendus
        unde aut corporis fugiat ut maxime, possimus vero consequuntur odio
        minima autem aliquid dolorem earum quam voluptas id magni tempora? Quae
        ducimus non, iusto id neque blanditiis repellendus. Veniam dolorum quod
        odit obcaecati mollitia iste repellat cumque molestias veritatis debitis
        amet vitae, minus hic incidunt adipisci harum, officiis natus
        exercitationem cupiditate. Illum similique, beatae consequatur est
        aliquid perferendis omnis vel odit facere reprehenderit dolorem.
        Sapiente neque quidem harum quae fugiat, voluptates illo sed!
        Blanditiis.
      </div>
    </main>
  );
};

export default MainLayout;
