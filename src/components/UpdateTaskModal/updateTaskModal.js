import React, {useEffect, useState} from 'react';
import {Button, Center, FormControl, Input, Modal} from 'native-base';
const UpdateModal = props => {
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);
  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);
  useEffect(() => {
    setText(props.text);
  }, [props.text]);
  return (
    <Center>
      <Modal
        isOpen={props.showModal}
        onClose={() => props.dismissModelHandler()}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header> Update Task</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Title</FormControl.Label>
              <Input value={title} onChangeText={value => setTitle(value)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Text</FormControl.Label>
              <Input value={text} onChangeText={value => setText(value)} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                onPress={() => props.dismissModelHandler()}>
                Cancel
              </Button>
              <Button
                onPress={() => props.saveModelHandler(props.id, title, text)}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default UpdateModal;
