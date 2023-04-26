import { Meta, Story } from "@storybook/react";
import { useState } from "react";

import Button from "components/Button";
import Text from "components/Text";

import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.type";
import css from "./Story.module.scss";

export default {
  title: "UI/Drawer",
  component: Drawer,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<DrawerProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.Story}>
      <Drawer {...args} open={open} onClose={() => setOpen(false)} />
      <div className={css.appbar}>
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
      <div>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          cupiditate deserunt dignissimos dolorem, earum et exercitationem id
          ipsa labore libero nam nesciunt nisi quaerat qui repellendus
          repudiandae rerum voluptate voluptates? Accusamus aliquid aut culpa
          cumque ducimus ea eius error eveniet exercitationem illo impedit
          incidunt inventore ipsa, magnam minus modi neque numquam, provident,
          quas qui quis repellat repudiandae saepe sapiente sunt vel vitae
          voluptatem? A alias aspernatur autem debitis dicta dignissimos eius
          esse illum quas qui, ratione, rem repudiandae sunt? Aliquam aspernatur
          aut autem consequatur dolorem esse est facere fuga harum id illo iure,
          labore laudantium magnam minus molestias nam nisi nulla odit officiis,
          quam quisquam ratione repudiandae similique vitae voluptatem
          voluptates. At enim illo perferendis suscipit temporibus? A, accusamus
          aliquam aperiam architecto dolor, dolore eveniet exercitationem
          facilis hic in inventore itaque iusto magni natus necessitatibus nihil
          pariatur rerum tempora totam ullam vero vitae voluptates. Accusantium
          architecto atque consectetur corporis dignissimos doloremque dolorum
          ducimus eveniet exercitationem, fuga impedit iure libero, magnam
          minima molestias necessitatibus nesciunt, nisi non nulla omnis
          possimus quo recusandae repellendus repudiandae sunt veniam vitae!
          Amet at eos est facilis, fugiat id maiores nihil obcaecati perferendis
          quis quisquam recusandae vero? Amet earum eveniet odio quaerat quod
          repellat voluptatem. A ab aliquid architecto assumenda at, cumque
          debitis delectus ea ex exercitationem id ipsa iste magnam maxime modi
          natus nihil omnis perferendis perspiciatis placeat quaerat quidem
          reiciendis repellendus soluta, tempora, tempore voluptatem. A ab
          corporis culpa distinctio dolorem dolorum facere facilis fuga impedit
          maiores molestiae mollitia nihil nulla perspiciatis porro quod
          ratione, rerum sequi sit suscipit. Accusamus accusantium adipisci
          aliquid animi aperiam autem cupiditate deserunt distinctio doloremque
          ea eaque est excepturi expedita fugit molestias nam non nostrum
          obcaecati, officia omnis perspiciatis quaerat quas repudiandae rerum
          similique soluta velit voluptates. Aut itaque praesentium quaerat
          saepe sit. A ducimus hic impedit ipsam mollitia officia vel. Debitis
          dolorum earum exercitationem laborum maxime mollitia nemo officia,
          porro quia quo sint temporibus unde veritatis voluptate voluptates. A
          adipisci at deserunt ea facere id maiores modi molestiae molestias,
          natus nihil officia, quia sapiente sed, sequi. Ad aliquam aperiam
          autem commodi consequatur culpa dignissimos, ea eius, esse, ex
          inventore iusto labore libero maxime neque praesentium provident. A at
          blanditiis corporis excepturi facere facilis iusto libero minima nulla
          numquam quam quia sint, soluta velit voluptatum. Alias dolore est ex
          omnis voluptatem. Architecto, culpa cumque distinctio doloribus error
          eum ex expedita incidunt itaque praesentium quas quis repudiandae,
          sunt tempora voluptatibus!
        </Text>
      </div>
    </div>
  );
};

const Default = Template.bind({});

Default.args = {
  children: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem
      facere laudantium quae. Debitis esse iusto labore quisquam repudiandae?
      Animi aut autem blanditiis delectus dolorem fugiat fugit laboriosam magnam
      maxime minus modi, molestiae necessitatibus nisi nobis nostrum nulla
      obcaecati odio optio provident quaerat qui repellat saepe sequi sunt,
      totam.
    </Text>
  ),
};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default };
