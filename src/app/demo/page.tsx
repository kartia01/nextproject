'use client';

import { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Label,
  Badge,
  Avatar,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  List,
  ListItem,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Pagination,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter,
  Drawer,
  DrawerHeader,
  DrawerContent,
  Tooltip,
  Popover,
  Toast,
  Alert,
  Sidebar,
  SidebarNav,
  SidebarItem,
  Breadcrumb,
  Container,
  Grid,
  Stack,
  Divider,
  Skeleton,
  Jumbotron,
  Slide,
} from '@/components/ui';
import { SiteHeader, Footer, FooterSection, FooterLink } from '@/components/layout';

export default function DemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);

  const demoNavItems = [
    { label: '버튼', href: '#buttons' },
    { label: '폼', href: '#forms' },
    { label: '레이아웃', href: '#layout' },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader
        brandLabel="컴포넌트 데모"
        brandHref="/demo"
        navItems={demoNavItems}
        mobileItems={demoNavItems}
      />

      <Jumbotron
        title="UI 컴포넌트 데모"
        subtitle="JSON 테마 기반 중앙화된 디자인 시스템"
      >
        <Button onClick={() => setModalOpen(true)}>모달 열기</Button>
        <Button variant="ghost" className="ml-2" onClick={() => setDrawerOpen(true)}>
          드로어 열기
        </Button>
      </Jumbotron>

      <Container className="py-12">
        <Stack gap="lg">
          {/* Buttons */}
          <section id="buttons">
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Button
            </h2>
            <Stack direction="row" gap="md" align="center">
              <Button>Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </Stack>
          </section>

          <Divider />

          {/* Form */}
          <section id="forms">
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Form
            </h2>
            <Grid cols={2} gap="md">
              <Card>
                <CardHeader>
                  <CardTitle>Input / Label / Textarea</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack gap="md">
                    <Stack gap="xs">
                      <Label htmlFor="demo-input">이름</Label>
                      <Input id="demo-input" placeholder="입력하세요" />
                    </Stack>
                    <Stack gap="xs">
                      <Label htmlFor="demo-textarea">설명</Label>
                      <Textarea id="demo-textarea" placeholder="내용을 입력하세요" />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Select / Checkbox / Radio / Switch</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stack gap="md">
                    <Stack gap="xs">
                      <Label>선택</Label>
                      <Select
                        options={[
                          { value: 'a', label: '옵션 A' },
                          { value: 'b', label: '옵션 B' },
                        ]}
                        placeholder="선택"
                      />
                    </Stack>
                    <Checkbox label="동의합니다" />
                    <Radio name="demo" label="옵션 1" />
                    <Radio name="demo" label="옵션 2" />
                    <Switch label="알림 받기" defaultChecked />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </section>

          <Divider />

          {/* Badge / Avatar */}
          <section>
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Badge / Avatar
            </h2>
            <Stack direction="row" gap="md" align="center">
              <Badge>default</Badge>
              <Badge variant="primary">primary</Badge>
              <Badge variant="success">success</Badge>
              <Badge variant="error">error</Badge>
              <Avatar alt="User" size="sm" />
              <Avatar alt="김철수" size="md" />
              <Avatar alt="Large" size="lg" />
            </Stack>
          </section>

          <Divider />

          {/* Card / List / Table */}
          <section>
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Card / List / Table
            </h2>
            <Grid cols={3} gap="md">
              <Card>
                <CardContent className="pt-4">
                  <List>
                    <ListItem>항목 1</ListItem>
                    <ListItem>항목 2</ListItem>
                    <ListItem>항목 3</ListItem>
                  </List>
                </CardContent>
              </Card>
              <Card variant="outline">
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                </CardHeader>
                <CardContent>카드 본문입니다.</CardContent>
                <CardFooter>
                  <Button size="sm">확인</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>이름</TableHead>
                        <TableHead>역할</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>홍길동</TableCell>
                        <TableCell>관리자</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>김철수</TableCell>
                        <TableCell>사용자</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
          </section>

          <section>
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Pagination
            </h2>
            <Pagination
              currentPage={page}
              totalPages={5}
              onPageChange={setPage}
            />
          </section>

          <Divider />

          {/* Tabs / Accordion */}
          <section>
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Tabs / Accordion
            </h2>
            <Grid cols={2} gap="md">
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">탭 1</TabsTrigger>
                  <TabsTrigger value="tab2">탭 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">탭 1 내용</TabsContent>
                <TabsContent value="tab2">탭 2 내용</TabsContent>
              </Tabs>
              <Accordion defaultValue="a1">
                <AccordionItem value="a1">
                  <AccordionTrigger value="a1">아코디언 1</AccordionTrigger>
                  <AccordionContent value="a1">내용 1</AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger value="a2">아코디언 2</AccordionTrigger>
                  <AccordionContent value="a2">내용 2</AccordionContent>
                </AccordionItem>
              </Accordion>
            </Grid>
          </section>

          <Divider />

          {/* Tooltip / Popover / Toast / Alert */}
          <section>
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Tooltip / Popover / Toast / Alert
            </h2>
            <Stack direction="row" gap="md" align="center">
              <Tooltip content="툴팁 내용">
                <Button variant="outline">툴팁 호버</Button>
              </Tooltip>
              <Popover
                trigger={<Button variant="outline">팝오버 클릭</Button>}
              >
                <div className="p-2">팝오버 내용</div>
              </Popover>
              <div className="max-w-md">
                <Toast title="토스트" description="메시지가 전달되었습니다." />
              </div>
            </Stack>
            <Stack gap="sm" className="mt-4 max-w-md">
              <Alert variant="info" title="알림" >정보 메시지입니다.</Alert>
              <Alert variant="success" title="성공" >처리가 완료되었습니다.</Alert>
              <Alert variant="error" title="오류" >오류가 발생했습니다.</Alert>
            </Stack>
          </section>

          <Divider />

          {/* Layout: Breadcrumb / Container / Grid / Stack / Divider / Skeleton */}
          <section id="layout">
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Layout
            </h2>
            <Breadcrumb
              items={[
                { label: '홈', href: '/' },
                { label: '데모', href: '/demo' },
                { label: '현재' },
              ]}
            />
            <div className="mt-4">
              <Grid cols={3} gap="md">
                <Skeleton className="h-20" />
                <Skeleton className="h-20" />
                <Skeleton className="h-20" />
              </Grid>
            </div>
            <div className="mt-4 flex gap-4">
              <Sidebar>
                <SidebarNav>
                  <SidebarItem href="#" active>메뉴 1</SidebarItem>
                  <SidebarItem href="#">메뉴 2</SidebarItem>
                </SidebarNav>
              </Sidebar>
              <div className="flex-1">
                <p>사이드바 옆 메인 콘텐츠 영역</p>
              </div>
            </div>
          </section>

          {/* Slide (conceptual) */}
          <section>
            <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] mb-4">
              Slide
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <Slide className="min-w-[200px]">
                <Card><CardContent className="py-8">슬라이드 1</CardContent></Card>
              </Slide>
              <Slide className="min-w-[200px]">
                <Card><CardContent className="py-8">슬라이드 2</CardContent></Card>
              </Slide>
              <Slide className="min-w-[200px]">
                <Card><CardContent className="py-8">슬라이드 3</CardContent></Card>
              </Slide>
            </div>
          </section>
        </Stack>
      </Container>

      <Footer>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterSection title="비즈니스">
              <FooterLink href="#">카카오뱅크 AD</FooterLink>
              <FooterLink href="#">제휴문의</FooterLink>
            </FooterSection>
            <FooterSection title="기술">
              <FooterLink href="#">기술블로그</FooterLink>
            </FooterSection>
            <FooterSection title="새소식">
              <FooterLink href="#">블로그</FooterLink>
              <FooterLink href="#">유튜브</FooterLink>
            </FooterSection>
          </div>
        </Container>
      </Footer>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalTitle>모달 제목</ModalTitle>
        <ModalContent>모달 본문입니다. JSON 테마의 z-index, backdrop 스타일이 적용됩니다.</ModalContent>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>취소</Button>
          <Button onClick={() => setModalOpen(false)}>확인</Button>
        </ModalFooter>
      </Modal>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} side="right">
        <DrawerHeader>
          <h2 className="text-lg font-semibold">드로어</h2>
          <Button variant="ghost" size="sm" onClick={() => setDrawerOpen(false)}>닫기</Button>
        </DrawerHeader>
        <DrawerContent>드로어 본문입니다.</DrawerContent>
      </Drawer>
    </div>
  );
}
