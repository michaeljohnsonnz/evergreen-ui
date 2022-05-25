import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Pane,
  Button,
  Heading,
  TextInput,
  majorScale,
  Text,
  Checkbox
} from "evergreen-ui";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pane background="tint2" style={{ maxWidth: '1000px', margin: '0 auto', float: 'none' }}>
      <Pane background="gray900">
        <Heading padding={16}>
          <Pane style={{ color: 'white' }}>
            <h1>EVERGREEN UI</h1>
          </Pane>
        </Heading>
      </Pane>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Left Aligned</Heading>
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
          <Button marginRight={16}>Button</Button>
          <Button appearance="primary">Primary Button</Button>
        </Pane>
      </Pane>
      {/* Checkbox */}
      <Pane padding={32} marginBottom={24}>
        <Checkbox label="Checkbox default" />
        <Checkbox indeterminate label="Checkbox indeterminate" />
        <Checkbox checked label="Checkbox checked" />
        <Checkbox disabled label="Checkbox disabled" />
        <Checkbox disabled checked label="Checkbox checked disabled" />
        <Checkbox disabled indeterminate label="Checkbox indeterminate disabled" />
      </Pane>
      {/* Form + Button */}
      <Pane display="flex" padding={32} marginBottom={24}>
        <TextInput width="100%" height={48} placeholder="Change my height to fit your needs." />
        <Button height={48} appearance="primary" marginLeft={16}>
          Big Button
        </Button>
      </Pane>
      {/* Single Button */}
      <Pane display="flex" padding={64} marginBottom={24}>
        <Button height={majorScale(6)}>Big Button</Button>
      </Pane>
      {/* Floating Panes */}
      <Pane clearfix>
        <Pane
          elevation={0}
          float="left"
          backgroundColor="white"
          width={200}
          height={120}
          margin={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text>Elevation 0</Text>
          <Text size={300}>Flat Panes</Text>
        </Pane>
        <Pane
          elevation={1}
          float="left"
          width={200}
          height={120}
          margin={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text>Elevation 1</Text>
          <Text size={300}>Floating Panes</Text>
        </Pane>
        <Pane
          elevation={2}
          float="left"
          width={200}
          height={120}
          margin={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text>Elevation 2</Text>
          <Text size={300}>Floating Panes</Text>
        </Pane>
        <Pane
          elevation={3}
          float="left"
          width={200}
          height={120}
          margin={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text>Elevation 3</Text>
          <Text size={300}>Floating Panes</Text>
        </Pane>
        <Pane
          elevation={4}
          float="left"
          width={200}
          height={120}
          margin={24}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text>Elevation 4</Text>
          <Text size={300}>Floating Panes</Text>
        </Pane>
      </Pane>
      <Pane clearfix>
        <Pane border width={120} height={80} marginRight={16} float="left" />
        <Pane border="default" width={120} height={80} marginRight={16} float="left" />
        <Pane border="muted" width={120} height={80} marginRight={16} float="left" />
      </Pane>
    </Pane>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
