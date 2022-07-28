import { moduleMetadata, storiesOf } from "@storybook/angular";
import { PixelFormFieldModule } from "../../projects/pixel/src/lib/form-field/form-field.module";
import { PixelInputModule } from "../../projects/pixel/src/lib/input/input.module";

storiesOf('Components/Input', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        PixelFormFieldModule,
        PixelInputModule
      ]
    })
  )
  .add(
    'Default',
    () => ({
      template: `
  <px-form-field>
    <input pxInput />
  </px-form-field>
  `
    })
  )
  .add(
    'Number',
    () => ({
      template: `
        <div style="width: 250px">
          <px-form-field>
            <input type="number" pxInput />
          </px-form-field>
        </div>
      `
    }),
  );
