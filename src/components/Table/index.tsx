import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';

type Hero = {
  first_name: string
}

type TableProps = {
  heroes: Array<Hero>
}

export default function SimpleTable(props: TableProps) {
  const sortedHeroes = props.heroes.sort((a, b) => a.first_name.localeCompare(b.first_name))
  console.log(sortedHeroes)

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '75vh' }} >
      <Table size="small">
        <TableBody>
          {sortedHeroes.map((hero) => (
            <TableRow 
              key={hero.first_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}>
                <Button variant='text' sx={{width: '100%', color: 'black'}}>{hero.first_name}</Button>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
