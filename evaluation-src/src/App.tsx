
import Papa from 'papaparse'
import { useMemo } from 'react'
import { useFetchText } from 'some-utils/npm/react'
import './App.css'

const useFetchCsv = (url: string) => {
  const str = useFetchText(url)
  const data = useMemo(() => {
    return str !== null && Papa.parse(str)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [str?.slice(0, 10)])
  return data
}

export const headToClassName = (data: string) => {
  data = data.trim()
  if (data === 'T') {
    return 'total'
  }
  if (/url/i.test(data)) {
    return 'url'
  }
  if (/github/i.test(data)) {
    return 'github'
  }
  if (/unreal.*engine/i.test(data)) {
    return 'unreal-engine'
  }
  if (/web/i.test(data)) {
    return 'presentation-web'
  }
  if (/général/i.test(data)) {
    return 'comment'
  }
  return ''
}


export const Table = ({ data }: { data: string[][] }) => {
  const [head, ...lines] = data
  const headClassNames = head.map(str => headToClassName(str))
  return (
    <table className='Table'>
      <colgroup>
        {head.map((data, cellIndex) => (
          <col key={cellIndex} className={headClassNames[cellIndex]} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {head.map((data, cellIndex) => (
            <th key={cellIndex} className={headClassNames[cellIndex]}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lines.map((line, lineIndex) => (
          <tr key={lineIndex}>
            {line.map((data, cellIndex) => {
              const className = headClassNames[cellIndex]
              const content = className === 'url'
                ? <a href={data}>{data}</a>
                : data
              return (
                <td key={cellIndex} className={className}>{content}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const App = () => {
  const csv = useFetchCsv('./assets/B2-EX1.csv')
  return (
    <div className="App">
      <main>
        <h1>
          <a href="https://github.com/jniac/SDC-22-23-B2-UE5/tree/main/exercises/Ex1">
            Evaluation Ex-1 Le temple dans la forêt
          </a>
        </h1>
        {csv && (
          <Table data={csv.data as string[][]} />
        )}
      </main>
    </div>
  )
}