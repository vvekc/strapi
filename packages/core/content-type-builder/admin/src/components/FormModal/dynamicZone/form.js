import getTrad from '../../../utils/getTrad';
import { componentField, componentForm } from '../component';

const form = {
  advanced: {
    default: () => {
      return {
        sections: componentForm.advanced('componentToCreate.'),
      };
    },
  },
  base: {
    createComponent: () => {
      return {
        sections: [
          { sectionTitle: null, items: [componentField] },
          ...componentForm.base('componentToCreate.'),
        ],
      };
    },
    default: () => {
      return {
        sections: [
          { sectionTitle: null, items: [componentField] },
          {
            sectionTitle: null,
            items: [
              // FIXME
              {
                type: 'pushRight',
                size: 6,
                // FIXME
                intlLabel: { id: '', defaultMessage: '' },
                name: 'pushRight',
              },
              {
                name: 'components',
                type: 'componentSelect',
                intlLabel: {
                  id: getTrad('modalForm.attributes.select-components'),
                  defaultMessage: 'Select the components',
                },
                isMultiple: true,
              },
            ],
          },
        ],
      };
    },
  },
};

export default form;
