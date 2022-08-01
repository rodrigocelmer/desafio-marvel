import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TablePagination } from '@mui/material';
import './styles.css';

type Hero = {
  name: string,
  id: number
}

type TableProps = {
  apiGetCharacter: (page: number) => void;
  changeHeroCallback: (heroNumber: number) => void;
  heroes: Array<Hero>,
  totalPages: number
}

export default function SimpleTable(props: TableProps) {
  const sortedHeroes = props.heroes?.sort((a, b) => a.name.localeCompare(b.name))

  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    props.apiGetCharacter(newPage)
    props.changeHeroCallback(0)
  };

  function onBtnClick(heroIndex: number){
    props.changeHeroCallback(heroIndex)
  }

  console.log(sortedHeroes)

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: '40vh' }} >
        <Table size="small">
          <TableBody>
            {sortedHeroes?.map((hero, index) => (
              <TableRow 
                key={hero.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  opacity:'0.8'
                }}>
                  <Button onClick={() => onBtnClick(hero.id)} variant='text' sx={{width: '100%', color: 'black', fontFamily:'myFirstFont'}}>{hero.name}</Button>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination sx={{color:'#fff', display:'flex' , justifyContent:'center'}}
        rowsPerPageOptions={[100]}
        component="p"
        count={props.totalPages}
        rowsPerPage={100}
        page={page}
        onPageChange={handleChangePage}
      />
  </>
  );
}
