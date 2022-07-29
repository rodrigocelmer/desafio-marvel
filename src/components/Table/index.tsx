import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TablePagination } from '@mui/material';

type Hero = {
  name: string
}

type TableProps = {
  apiGetCharacter: (page: number) => void;
  changeHeroCallback: (heroNumber: number) => void;
  heroes: Array<Hero>,
  totalPages: number,
  heroIndex: number
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

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: '75vh' }} >
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
                  flexDirection: 'column'
                }}>
                  <Button onClick={() => onBtnClick(index)} variant='text' sx={{width: '100%', color: 'black'}}>{hero.name}</Button>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[100]}
        component="div"
        count={props.totalPages}
        rowsPerPage={100}
        page={page}
        onPageChange={handleChangePage}
      />
  </>
  );
}
