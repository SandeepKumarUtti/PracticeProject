import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TaskList.style';
import {DeleteIcon, IconButton} from 'native-base';
import UpdateModal from '../UpdateTaskModal/updateTaskModal';
const TaskList = props => {
  const [showModal, setShowModal] = useState(false);
  const dismissModelHandler = () => {
    setShowModal(false);
  };
  const saveModelHandler = (id, title, text) => {
    props.updateTaskHandler(id, title, text);
    setShowModal(false);
  };
  const [modalId, setModalId] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const renderList = props.tasks.map(task => {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => {
              setModalId(task.id);
              setModalText(task.text);
              setModalTitle(task.title);
              setShowModal(true);
            }}>
            <Text style={styles.header}>{task.title}</Text>
            <Text>{task.text}</Text>
          </TouchableOpacity>
          <IconButton
            variant="ghost"
            icon={<DeleteIcon />}
            onPress={() =>
              props.deleteTaskHandler(task.id, task.title, task.text)
            }
          />
          <UpdateModal
            showModal={showModal}
            id={modalId}
            dismissModelHandler={dismissModelHandler}
            saveModelHandler={saveModelHandler}
            title={modalTitle}
            text={modalText}
          />
        </View>
      </View>
    );
  });
  return <View>{renderList}</View>;
};
export default TaskList;
