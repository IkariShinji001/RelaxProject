import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  createListCollection,
  Field,
  Heading,
  HStack,
  IconButton,
  Input,
  Pagination,
  Portal,
  Select,
  Table,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { paginateItems, pageSizeList } from "@/common/PaginationCommonUtil";

function Category() {
  const frameworks = createListCollection({
    items: [
      { label: "A -> Z", value: "desc" },
      { label: "Z -> Z", value: "asc" },
    ],
  });

  const pageSizeCollections = createListCollection({
    items: pageSizeList,
  });

  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
    { id: 6, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 7, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 8, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 9, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 10, name: "Headphones", category: "Accessories", price: 199.99 },
  ];

  const [selection, setSelection] = useState<number[]>([]);
  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < items.length;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeList[0].value);

  const rows = paginateItems(items, page, pageSize).map((item) => (
    <Table.Row
      key={item.name}
      data-selected={selection.includes(item.id) ? "" : undefined}
    >
      <Table.Cell>
        <Checkbox.Root
          size="sm"
          top="0.5"
          aria-label="Select row"
          checked={selection.includes(item.id)}
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, item.id]
                : selection.filter((id) => id !== item.id)
            );
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.category}</Table.Cell>
      <Table.Cell>${item.price}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Container>
      <Heading size="xl" marginBottom={5}>
        Danh sách danh mục bài viết
      </Heading>
      <HStack>
        <Field.Root w="50%">
          <Field.Label>
            Tìm kiếm <Field.RequiredIndicator />
          </Field.Label>
          <Input placeholder="Tìm kiếm tên danh mục" w="100%" />
        </Field.Root>

        <Select.Root collection={frameworks} size="sm" width="30%">
          <Select.HiddenSelect />
          <Select.Label>Sắp xếp</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Chọn cách sắp xếp" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.ClearTrigger />
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Button w="20%" alignSelf="flex-end">
          Tìm kiếm
        </Button>
      </HStack>

      <HStack>
        <Select.Root
          collection={pageSizeCollections}
          size="sm"
          width="20%"
          onValueChange={(details) => {
            console.log(details.value);
            if (details.value.length === 0) {
              setPageSize(pageSizeList[0].value);
              setPage(1);
            } else {
              setPageSize(Number(details.value));
              setPage(1);
            }
          }}
        >
          <Select.HiddenSelect />
          <Select.Label>Số phần tử hiển thị</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Chọn số phần tử hiển thị" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.ClearTrigger />
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {pageSizeCollections.items.map((pageSize) => (
                  <Select.Item item={pageSize} key={pageSize.value}>
                    {pageSize.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </HStack>

      <Table.Root
        marginTop="30px"
        marginBottom="20px"
        size="sm"
        variant="outline"
        interactive
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w="5%">
              <Checkbox.Root
                size="sm"
                top="0.5"
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked ? items.map((item) => item.id) : []
                  );
                }}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>
            </Table.ColumnHeader>
            <Table.ColumnHeader w="20%">Product</Table.ColumnHeader>
            <Table.ColumnHeader w="30%">Category</Table.ColumnHeader>
            <Table.ColumnHeader w="45%">Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <HStack justifyContent="center">
        <Pagination.Root
          count={items.length}
          pageSize={pageSize}
          page={page}
          onPageChange={(details) => setPage(details.page)}
        >
          <ButtonGroup variant="ghost" size="sm" wrap="wrap">
            <Pagination.PrevTrigger asChild>
              <IconButton>
                <LuChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton>
                <LuChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </HStack>
    </Container>
  );
}

export default Category;
