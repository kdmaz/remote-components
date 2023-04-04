import RemoteComponent2 from 'remoteComponent2/RemoteComponent2'

interface Props {
  color: string
}

function RemoteComponent1({ color }: Props): JSX.Element {
  return (
    <div style={{ color, border: '1px solid black', margin: '10px ' }}>
      Remote Component 1 Container
      <RemoteComponent2 />
    </div>
  )
}

export default RemoteComponent1
