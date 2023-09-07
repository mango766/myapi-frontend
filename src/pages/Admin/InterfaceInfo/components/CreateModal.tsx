import {
  ProColumns,
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea, ProTable,
  StepsForm,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React from 'react';




export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values:API.InterfaceInfo) => Promise<void>;
  visible: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const intl = useIntl();
  const {visible,columns,onCancel,onSubmit} = props;

  return <Modal visible={visible} onCancel={()=>onCancel?.()}>
    <ProTable type="form" columns={columns} onSubmit={
      async (value) => {
      onSubmit?.(value);
    }
    }/>
  </Modal>;
};

export default CreateModal;
