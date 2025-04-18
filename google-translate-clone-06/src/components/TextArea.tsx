/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Type to translate'
  if (loading) return 'Loading ...'
  return 'Traduction'
}

export const TextArea = ({ type, loading, onChange, value }: Props) => {
  const commonStyles = { height: '150px' }
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f5f5f5', border: 0 }
  return (
    <Form.Control
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      style={styles}
      value={value}
    />
  )
}
