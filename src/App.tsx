import GridCard from "./components/GridCard";

export default function App() {
  return (
    <>
      <div className="grid h-screen">
        <GridCard numCards={20} />
      </div>
    </>
  )
}