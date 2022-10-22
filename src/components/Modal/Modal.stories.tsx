import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import Button from "components/Button";
import Heading from "components/Heading";
import Text from "components/Text";

import Modal from "./Modal";
import { ModalProps } from "./Modal.type";
import css from "./Story.module.scss";

export default {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <div className={css.Story}>
    <div className={css.modalBlock}>
      <Heading>Some content</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque,
        distinctio doloremque fugit id ipsum maiores molestias necessitatibus
        officiis omnis perspiciatis quos similique, tenetur, voluptate
        voluptatem voluptatibus voluptatum? Ab, autem doloremque eius esse,
        explicabo hic in ipsa necessitatibus non porro recusandae sapiente sequi
        ullam? Dolore dolorem eveniet facilis. Accusamus adipisci alias animi at
        debitis dolorem doloribus enim eos eveniet fuga fugiat laboriosam
        laudantium libero nisi officiis, optio praesentium quo repudiandae sint
        tempora voluptatem voluptatibus voluptatum? Corporis, debitis odio?
        Aspernatur error hic ipsa neque possimus provident quasi repellat. Amet
        dignissimos libero maxime molestiae placeat? Excepturi fugit recusandae
        temporibus ullam. Adipisci aperiam at consectetur deleniti dicta eius
        eligendi eos esse est ex id ipsum maxime modi molestiae nemo neque
        numquam porro possimus quas reiciendis saepe sint sit suscipit, veniam
        voluptatem? Accusamus ad aliquam assumenda, at consequatur delectus
        deleniti deserunt dolorum ea est eum ex excepturi exercitationem
        incidunt ipsam ipsum itaque iusto laborum modi molestias neque nesciunt
        non nulla, odio odit placeat quibusdam quidem quisquam quo quos ratione
        repellat repellendus saepe veniam veritatis voluptate voluptatum?
        Aliquid architecto cupiditate enim esse minima, nesciunt odio
        perferendis quod, rerum saepe sint ut, voluptates! Aspernatur dolorem
        eligendi est ex incidunt ipsam laboriosam laborum natus necessitatibus
        quae, quibusdam sapiente, soluta, sunt veniam voluptates. Accusamus
        alias aperiam asperiores assumenda dolor dolores earum eos hic in
        maiores minus obcaecati, pariatur quae quia repellat repudiandae
        suscipit, temporibus velit voluptas voluptatibus! Accusamus cum delectus
        exercitationem hic laboriosam praesentium recusandae, unde! Dolorum
        fugiat ipsam iste mollitia possimus quis ratione sed sit voluptatem!
        Alias consequuntur dolorem esse in incidunt laborum libero magni
        molestiae neque possimus, quibusdam recusandae temporibus, veniam!
        Architecto beatae optio porro quam qui quia, vero voluptate! Aperiam at
        aut beatae corporis eum explicabo facilis fugiat, illo illum, itaque
        laborum minus nisi perferendis praesentium quam quibusdam sequi!
        Architecto earum eius, eveniet exercitationem facilis harum inventore
        magni maxime obcaecati praesentium quibusdam quod ratione repellendus
        totam veritatis. Ab adipisci at, cumque distinctio dolores ducimus eaque
        earum eos ex iste laboriosam minus possimus, quis saepe sed temporibus
        voluptates. Impedit nostrum officiis vitae? Accusamus adipisci
        asperiores assumenda atque blanditiis consequatur corporis deserunt
        dolore ducimus eos, in iste libero magnam non numquam odio quasi.
        Asperiores, atque cumque dignissimos facere harum id itaque nisi non
        obcaecati odit pariatur, perferendis perspiciatis, placeat porro quas
        sapiente similique. Atque cumque nesciunt voluptatibus! Alias at
        corporis cumque error esse illum minima numquam possimus reprehenderit!
        Asperiores aut beatae cupiditate, delectus dignissimos dolore, ducimus
        eligendi eos exercitationem iste, iure maiores maxime modi molestias
        nemo neque perferendis praesentium quaerat quam quas quibusdam repellat
        similique soluta sunt suscipit temporibus ullam voluptatum? Autem,
        dolores eaque ex expedita facere fugiat illo ipsam natus omnis porro
        quibusdam quidem ullam voluptatibus! Amet consectetur debitis delectus
        doloremque exercitationem labore laborum minus molestiae nesciunt nobis
        non odio, officia quae quasi quis similique tempore ut vero voluptate
        voluptatem. Debitis distinctio doloremque ea eveniet facilis fuga
        impedit itaque iure laboriosam libero magnam magni minima mollitia natus
        nemo optio quisquam sed tempora, velit veniam. A aliquam aliquid,
        aspernatur assumenda autem commodi consectetur consequatur consequuntur
        cupiditate deleniti dolorem doloremque dolores eum eveniet, illo ipsam
        itaque laboriosam laborum minima mollitia nihil nulla pariatur qui quis
        ratione recusandae, repudiandae saepe sint tempore tenetur. Earum eum
        harum labore magni nihil numquam quidem reiciendis. Consectetur,
        delectus distinctio dolor est exercitationem facere fuga illo laudantium
        maxime nam nemo nulla numquam, officiis omnis quae quasi quibusdam
        repellat, soluta vel vitae. Cum doloribus, eaque fuga fugit labore
        libero, magni nam obcaecati odio porro totam ullam veritatis! Beatae
        doloribus enim eos labore magni nam officia officiis quo. Accusamus
        accusantium amet asperiores atque aut autem beatae blanditiis cumque
        debitis dolore dolorem doloribus esse et facere id illo iste magnam
        magni minus molestiae nostrum obcaecati odio perspiciatis possimus quas
        qui quis quod ratione rem reprehenderit, repudiandae sapiente sint sit
        soluta vero voluptatem voluptates? Amet autem debitis eligendi fuga quas
        soluta unde. Beatae, consectetur cumque deleniti deserunt dolor dolore
        doloribus dolorum enim eum expedita explicabo harum magnam, maiores
        maxime minima molestiae molestias nobis nostrum numquam officiis
        perspiciatis provident quaerat quia quisquam sed sit tempora tempore
        tenetur totam ut vel veniam veritatis, voluptatem. Aliquam ea eveniet
        fugit in laboriosam mollitia non possimus quae quam quia. Accusantium
        aut beatae blanditiis culpa cum cupiditate, delectus deleniti dolore
        doloremque eius, facilis illo illum in inventore iste itaque, iusto
        laboriosam laborum nesciunt obcaecati omnis pariatur possimus provident
        quo sed similique sit soluta tempora ut voluptas voluptatem voluptates
        voluptatibus voluptatum. Architecto asperiores, assumenda, blanditiis
        debitis delectus dignissimos dolores doloribus earum in libero, minus
        nam nihil obcaecati quaerat ratione similique soluta tempore vel velit
        vitae. Consectetur dignissimos ea et eum ex hic id incidunt ipsum labore
        nemo neque, numquam, odio odit quis repudiandae rerum sequi, sit tempore
        tenetur veniam veritatis voluptatibus voluptatum? Aliquam animi
        consequatur dignissimos est laudantium molestiae nihil omnis quaerat
        quis quos reprehenderit rerum similique tempore unde vel, voluptatem
        voluptates! Aperiam, consequatur dolorem facilis iusto minus
        perspiciatis repudiandae sunt voluptas! Accusamus aperiam architecto aut
        consequuntur cum deserunt, ducimus eum harum in ipsa ipsam optio
        pariatur perspiciatis praesentium quaerat quam, quasi quod, saepe
        tempora vero. Ab, aliquam amet animi assumenda consequatur dolore eos
        hic inventore itaque iusto minima modi natus nemo nesciunt non numquam
        optio quasi quibusdam quo rem tempora temporibus ut voluptatem! Alias
        blanditiis fugiat laborum laudantium molestias natus quaerat ratione rem
        tempore? Animi aspernatur, commodi consequatur consequuntur eveniet ex
        hic itaque laboriosam laborum molestiae molestias obcaecati, perferendis
        praesentium recusandae veniam vitae voluptas voluptatibus! A, alias
        asperiores beatae consectetur culpa doloribus et excepturi inventore
        nemo nostrum obcaecati quisquam rerum suscipit tempora voluptatum! Aut
        commodi, dolorum, eos laboriosam magnam minima necessitatibus nemo non
        quo repudiandae sapiente soluta sunt, unde. Ab aperiam consequuntur
        culpa, cumque delectus dolor ducimus ex, inventore iure iusto laudantium
        quas quasi quos repellendus unde veniam veritatis! Atque culpa dolor
        dolorem dolores libero nam neque odio, odit pariatur praesentium quam
        quia quibusdam quisquam sed, sequi suscipit vel. Atque consectetur
        debitis dolorum ducimus, ea eligendi explicabo illum ipsa nemo quibusdam
        sapiente sit, vel veritatis. Accusantium adipisci consectetur culpa
        dolorem et eum eveniet illo libero natus odit officia, perspiciatis
        porro quod temporibus unde vero!
      </Text>
    </div>
    <Modal {...args}>
      <Heading>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta et
        minus quas quasi sit temporibus? Dicta dolorem eligendi error est
        expedita, illum ipsum magni nulla quos soluta veritatis voluptas.
      </Text>
    </Modal>
  </div>
);

const ToggleTemplate: Story<ModalProps> = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={css.Story}>
      <div>
        <Heading>Some content</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          cumque, distinctio doloremque fugit id ipsum maiores molestias
          necessitatibus officiis omnis perspiciatis quos similique, tenetur,
          voluptate voluptatem voluptatibus voluptatum? Ab, autem doloremque
          eius esse, explicabo hic in ipsa necessitatibus non porro recusandae
          sapiente sequi ullam? Dolore dolorem eveniet facilis. Accusamus
          adipisci alias animi at debitis dolorem doloribus enim eos eveniet
          fuga fugiat laboriosam laudantium libero nisi officiis, optio
          praesentium quo repudiandae sint tempora voluptatem voluptatibus
          voluptatum? Corporis, debitis odio? Aspernatur error hic ipsa neque
          possimus provident quasi repellat. Amet dignissimos libero maxime
          molestiae placeat? Excepturi fugit recusandae temporibus ullam.
          Adipisci aperiam at consectetur deleniti dicta eius eligendi eos esse
          est ex id ipsum maxime modi molestiae nemo neque numquam porro
          possimus quas reiciendis saepe sint sit suscipit, veniam voluptatem?
          Accusamus ad aliquam assumenda, at consequatur delectus deleniti
          deserunt dolorum ea est eum ex excepturi exercitationem incidunt ipsam
          ipsum itaque iusto laborum modi molestias neque nesciunt non nulla,
          odio odit placeat quibusdam quidem quisquam quo quos ratione repellat
          repellendus saepe veniam veritatis voluptate voluptatum? Aliquid
          architecto cupiditate enim esse minima, nesciunt odio perferendis
          quod, rerum saepe sint ut, voluptates! Aspernatur dolorem eligendi est
          ex incidunt ipsam laboriosam laborum natus necessitatibus quae,
          quibusdam sapiente, soluta, sunt veniam voluptates. Accusamus alias
          aperiam asperiores assumenda dolor dolores earum eos hic in maiores
          minus obcaecati, pariatur quae quia repellat repudiandae suscipit,
          temporibus velit voluptas voluptatibus! Accusamus cum delectus
          exercitationem hic laboriosam praesentium recusandae, unde! Dolorum
          fugiat ipsam iste mollitia possimus quis ratione sed sit voluptatem!
          Alias consequuntur dolorem esse in incidunt laborum libero magni
          molestiae neque possimus, quibusdam recusandae temporibus, veniam!
          Architecto beatae optio porro quam qui quia, vero voluptate! Aperiam
          at aut beatae corporis eum explicabo facilis fugiat, illo illum,
          itaque laborum minus nisi perferendis praesentium quam quibusdam
          sequi! Architecto earum eius, eveniet exercitationem facilis harum
          inventore magni maxime obcaecati praesentium quibusdam quod ratione
          repellendus totam veritatis. Ab adipisci at, cumque distinctio dolores
          ducimus eaque earum eos ex iste laboriosam minus possimus, quis saepe
          sed temporibus voluptates. Impedit nostrum officiis vitae? Accusamus
          adipisci asperiores assumenda atque blanditiis consequatur corporis
          deserunt dolore ducimus eos, in iste libero magnam non numquam odio
          quasi. Asperiores, atque cumque dignissimos facere harum id itaque
          nisi non obcaecati odit pariatur, perferendis perspiciatis, placeat
          porro quas sapiente similique. Atque cumque nesciunt voluptatibus!
          Alias at corporis cumque error esse illum minima numquam possimus
          reprehenderit! Asperiores aut beatae cupiditate, delectus dignissimos
          dolore, ducimus eligendi eos exercitationem iste, iure maiores maxime
          modi molestias nemo neque perferendis praesentium quaerat quam quas
          quibusdam repellat similique soluta sunt suscipit temporibus ullam
          voluptatum? Autem, dolores eaque ex expedita facere fugiat illo ipsam
          natus omnis porro quibusdam quidem ullam voluptatibus! Amet
          consectetur debitis delectus doloremque exercitationem labore laborum
          minus molestiae nesciunt nobis non odio, officia quae quasi quis
          similique tempore ut vero voluptate voluptatem. Debitis distinctio
          doloremque ea eveniet facilis fuga impedit itaque iure laboriosam
          libero magnam magni minima mollitia natus nemo optio quisquam sed
          tempora, velit veniam. A aliquam aliquid, aspernatur assumenda autem
          commodi consectetur consequatur consequuntur cupiditate deleniti
          dolorem doloremque dolores eum eveniet, illo ipsam itaque laboriosam
          laborum minima mollitia nihil nulla pariatur qui quis ratione
          recusandae, repudiandae saepe sint tempore tenetur. Earum eum harum
          labore magni nihil numquam quidem reiciendis. Consectetur, delectus
          distinctio dolor est exercitationem facere fuga illo laudantium maxime
          nam nemo nulla numquam, officiis omnis quae quasi quibusdam repellat,
          soluta vel vitae. Cum doloribus, eaque fuga fugit labore libero, magni
          nam obcaecati odio porro totam ullam veritatis! Beatae doloribus enim
          eos labore magni nam officia officiis quo. Accusamus accusantium amet
          asperiores atque aut autem beatae blanditiis cumque debitis dolore
          dolorem doloribus esse et facere id illo iste magnam magni minus
          molestiae nostrum obcaecati odio perspiciatis possimus quas qui quis
          quod ratione rem reprehenderit, repudiandae sapiente sint sit soluta
          vero voluptatem voluptates? Amet autem debitis eligendi fuga quas
          soluta unde. Beatae, consectetur cumque deleniti deserunt dolor dolore
          doloribus dolorum enim eum expedita explicabo harum magnam, maiores
          maxime minima molestiae molestias nobis nostrum numquam officiis
          perspiciatis provident quaerat quia quisquam sed sit tempora tempore
          tenetur totam ut vel veniam veritatis, voluptatem. Aliquam ea eveniet
          fugit in laboriosam mollitia non possimus quae quam quia. Accusantium
          aut beatae blanditiis culpa cum cupiditate, delectus deleniti dolore
          doloremque eius, facilis illo illum in inventore iste itaque, iusto
          laboriosam laborum nesciunt obcaecati omnis pariatur possimus
          provident quo sed similique sit soluta tempora ut voluptas voluptatem
          voluptates voluptatibus voluptatum. Architecto asperiores, assumenda,
          blanditiis debitis delectus dignissimos dolores doloribus earum in
          libero, minus nam nihil obcaecati quaerat ratione similique soluta
          tempore vel velit vitae. Consectetur dignissimos ea et eum ex hic id
          incidunt ipsum labore nemo neque, numquam, odio odit quis repudiandae
          rerum sequi, sit tempore tenetur veniam veritatis voluptatibus
          voluptatum? Aliquam animi consequatur dignissimos est laudantium
          molestiae nihil omnis quaerat quis quos reprehenderit rerum similique
          tempore unde vel, voluptatem voluptates! Aperiam, consequatur dolorem
          facilis iusto minus perspiciatis repudiandae sunt voluptas! Accusamus
          aperiam architecto aut consequuntur cum deserunt, ducimus eum harum in
          ipsa ipsam optio pariatur perspiciatis praesentium quaerat quam, quasi
          quod, saepe tempora vero. Ab, aliquam amet animi assumenda consequatur
          dolore eos hic inventore itaque iusto minima modi natus nemo nesciunt
          non numquam optio quasi quibusdam quo rem tempora temporibus ut
          voluptatem! Alias blanditiis fugiat laborum laudantium molestias natus
          quaerat ratione rem tempore? Animi aspernatur, commodi consequatur
          consequuntur eveniet ex hic itaque laboriosam laborum molestiae
          molestias obcaecati, perferendis praesentium recusandae veniam vitae
          voluptas voluptatibus! A, alias asperiores beatae consectetur culpa
          doloribus et excepturi inventore nemo nostrum obcaecati quisquam rerum
          suscipit tempora voluptatum! Aut commodi, dolorum, eos laboriosam
          magnam minima necessitatibus nemo non quo repudiandae sapiente soluta
          sunt, unde. Ab aperiam consequuntur culpa, cumque delectus dolor
          ducimus ex, inventore iure iusto laudantium quas quasi quos
          repellendus unde veniam veritatis! Atque culpa dolor dolorem dolores
          libero nam neque odio, odit pariatur praesentium quam quia quibusdam
          quisquam sed, sequi suscipit vel. Atque consectetur debitis dolorum
          ducimus, ea eligendi explicabo illum ipsa nemo quibusdam sapiente sit,
          vel veritatis. Accusantium adipisci consectetur culpa dolorem et eum
          eveniet illo libero natus odit officia, perspiciatis porro quod
          temporibus unde vero!
        </Text>
      </div>
      <Button className={css.closeButton} onClick={() => setOpen(true)}>
        Open
      </Button>
      {open && (
        <Modal onClose={closeModal}>
          <div className={css.modalBlock}>
            <Heading>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta
              et minus quas quasi sit temporibus? Dicta dolorem eligendi error
              est expedita, illum ipsum magni nulla quos soluta veritatis
              voluptas.
            </Text>
            <div className={css.buttonsContainer}>
              <Button onClick={closeModal} color="success">
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

const Default = Template.bind({});
const Example = ToggleTemplate.bind({});

Default.args = {
  open: true,
};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default, Example };
